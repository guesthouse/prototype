import React from "react";
import './editProduct.scss';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import FileUploader from 'react-firebase-file-uploader/lib/CustomUploadButton';
import ReactDatetime from "react-datetime";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col, 
  Row
} from "reactstrap";


class editProduct extends React.Component {
  constructor(){
    super()

    this.state = {
      makerNameDropdownOpen: false,
      productTypeDropdownOpen: false,
      installStatusDropdownOpen: false,
      installLocationDropdownOpen: false,

      user : {role: 'super'},
      imageURL: null,
      title: '',
      price: '',
      allTypes: [],
      productType: 'Select Type', 
      allMakers: [],
      selectedMaker: 'Select Maker',
      makerID: '',
      makerName: '',
      status: 'staged',
      allProperties: [],
      propertyID: '',
      propertyName: '',
      installDate: '',
      notes: ''
    }
  }

  
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});

  handleProgress = (progress) => this.setState({progress});

  handleUploadError = (error) => {
    this.setState({
      isUploading: false});
    console.error(error);
  }

  handleUploadSuccess = (filename) => {
    this.setState({
      avatar: filename, 
      progress: 100,
      isUploading: false
    });

    firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({
        imageURL: url
      })
    );
  };

  
  handleText = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  toggle = (e) => {
    var singleDropdown = [e.target.id] + 'DropdownOpen';
    this.setState(prevState => ({
     [singleDropdown]: !prevState.singleDropdown,
    }));
  }

  setMaker = (e) => {
    console.log (e.target.innerHTML)
    this.setState ({
      makerID: e.target.id,
      makerName: e.target.value
    });
  };

  setType = (e) => {
    console.log(e.target.innerHTML)
    this.setState({
      productType: e.target.innerHTML
    });
  };

  setLocation = (e) => {
    console.log (e.target.id, e.target.innerHTML)
    this.setState({
      propertyID: e.target.id,
      propertyName: e.target.innerHTML
    });
  };
  
  setStatus = (e) => {
    console.log (e.target.innerHTML)
    this.setState({
      status: e.target.innerHTML
    });
  };

  setInstallDate = (e) => {
    var date = e.toDate();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var picked = month + '/' + day + '/' + year;
    this.setState({installDate: picked});
  } 

  saveProduct = () => {
    let productID = this.props.product.productID
    const db = firebase.firestore()
    db.collection('products').doc(productID).update({
      title: this.state.title,
      price: this.state.price,
      productType: this.state.productType,
      makerName: this.state.makerName,
      makerID: this.state.makerID,
      propertyName: this.state.propertyName,
      propertyID: this.state.propertyID,
      installDate: this.state.installDate,
      notes: this.state.notes,
      imageURL: this.state.imageURL,
      archived: false
    }).then( (docRef) => {
      this.props.closeModal();
    })
    .catch(function(error) {
      // expose error to user
      console.error("Error adding document: ", error);
    });
  }

  componentDidMount() {
    console.log(this.props.product)
    this.setState({
      title: this.props.product.title,
      price: this.props.product.price,
      productType: this.props.product.productType,
      makerName: this.props.product.makerName,
      makerID: this.props.product.makerID,
      propertyName: this.props.product.propertyName,
      propertyID: this.props.product.propertyID,
      installDate: this.props.product.installDate,
      notes: this.props.product.notes,
      imageURL: this.props.product.imageURL,
      archived: this.props.product.archived
    });
  }

  render() {
    let uploadStyle = { 
      width: '100px', 
      height: '100px', 
      fontSize:'18px', 
      color: 'white',
      padding: 15, 
      margin:'auto', 
      borderRadius: 5, 
      cursor: 'pointer',
      border: 'solid 2px white',
      textAlign: 'center'
    }
    return (
      <div className="editProduct">
        <Card className='add-card'>
          { this.state.imageURL != null
            ? <div className="image-container">
                <img src={this.state.imageURL} alt='maker uploaded product' className="product"/>
              </div>
            : <div className='add-image'>
              <div className="center">
                <FileUploader
                  accept="image/*"
                  multiple
                  name="avatar"
                  randomizeFilename
                  storageRef={firebase.storage().ref('images')}
                  onUploadStart={ this.handleUploadStart }
                  onUploadError={ this.handleUploadError }
                  onUploadSuccess={ this.handleUploadSuccess }
                  onProgress={ this.handleProgress }
                  style={ uploadStyle }
                >+ Photo
                </FileUploader>
              </div>
            </div>
          }
          <CardBody>
            <Form>

              <Row>
                <Col md="8">
                  <FormGroup>
                    <label>Product Title</label>
                    <Input
                      defaultValue={this.state.title}
                      placeholder="Product Title"
                      type="text"
                      onChange={this.handleText}
                      id="title"
                    />
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup>
                    <label>Price</label>
                    <Input
                      defaultValue={this.state.price}
                      placeholder="0.00"
                      type="nummeric"
                      onChange={this.handleText}
                      id="price"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row md="12">
                { this.state.user.role === 'super'
                  ? <Col md="4" >
                      <FormGroup className="add-dropdown">
                        <label>Maker's Name</label>
                        <Dropdown isOpen={this.state.makerNameDropdownOpen} toggle={this.toggle} size="md">
                          <DropdownToggle id="makerName" caret>
                            {this.state.makerName}
                          </DropdownToggle>
                          <DropdownMenu>
                            {(this.state.allMakers).map((e,i)=>{
                              return (
                              <DropdownItem onClick={this.setMaker} key={i} id={e.id}>{e.makerName}</DropdownItem>
                              )
                            })}
                          </DropdownMenu>
                        </Dropdown>
                      </FormGroup>
                    </Col>
                  : null 
                }

                <Col md="4">
                  <FormGroup className="add-dropdown">
                    <label>Product Type</label>
                    <Dropdown isOpen={this.state.productTypeDropdownOpen} toggle={this.toggle} size="md">
                      <DropdownToggle id="productType" caret>
                        {this.state.productType}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.setType}>Coffe Table</DropdownItem>
                        <DropdownItem onClick={this.setType}>Night Stand</DropdownItem>
                        <DropdownItem onClick={this.setType}>Carpets/Rugs</DropdownItem>
                        <DropdownItem onClick={this.setType}>Sofas</DropdownItem>
                        <DropdownItem onClick={this.setType}>Lighting</DropdownItem>
                        <DropdownItem onClick={this.setType}>Artwork </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </FormGroup>
                </Col>

                { this.state.user.role === 'super'
                  ? <Col md="4">
                    <FormGroup className="add-dropdown">
                      <label>Staging Status</label>
                      <Dropdown isOpen={this.state.installStatusDropdownOpen} toggle={this.toggle} size="md">
                        <DropdownToggle id="installStatus" caret>
                          {this.state.status}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={this.setStatus}>Available</DropdownItem>
                          <DropdownItem onClick={this.setStatus}>Requested</DropdownItem>
                          <DropdownItem onClick={this.setStatus}>Staged</DropdownItem>
                          <DropdownItem onClick={this.setStatus}>Sold</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </FormGroup>
                  </Col>
                  : null 
                }
              </Row>

              { this.state.status === 'staged' || this.state.status === 'planned'
                ? <Row md="12">
                  <Col md="4" >
                    <FormGroup className="add-dropdown">
                      <label>Staging Location</label>
                      <Dropdown isOpen={this.state.installLocationDropdownOpen} toggle={this.toggle} size="md">
                        <DropdownToggle id="installLocation" caret>
                          {this.state.propertyName}
                        </DropdownToggle>
                        <DropdownMenu>
                          {(this.state.allProperties).map((e,i)=>{
                            return (
                             <DropdownItem onClick={this.setLocation} key={i} id={e.id}>{e.address}</DropdownItem>
                            )
                          })}
                        </DropdownMenu>
                      </Dropdown>
                    </FormGroup>
                  </Col>

                  <Col md="4" >
                    <FormGroup className="add-dropdown">
                      <label>Install Date</label>
                      <ReactDatetime
                        inputProps={{
                          className: "form-control adjust",
                          placeholder: this.state.installDate
                        }}
                        dateFormat='MM-DD-YYYY'
                        closeOnSelect= {true}
                        onChange= {this.setInstallDate}
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                : null 
              }
              
              { this.state.user.role === 'super'
                ? <Row>
                  <Col  md="12">
                    <FormGroup>
                      <label>Notes</label>
                      <Input
                        defaultValue={this.state.notes}
                        type="textarea"
                        cols="80"
                        rows="8"
                        onChange={this.handleText}
                        id="notes"
                    />
                    </FormGroup>
                  </Col>
                </Row>
                : null
              }

              <Row>
                <Button className='btn-center' onClick={this.saveProduct}>Save Changes</Button>
              </Row>

            </Form>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default editProduct;