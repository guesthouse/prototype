import React from "react";
import './addProduct.scss';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import FileUploader from 'react-firebase-file-uploader/lib/CustomUploadButton';
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


class addProduct extends React.Component {
  constructor(){
    super()

    this.state = {
      user : {role: 'super'},
      imageURL: null,
      title: '',
      price: '',
      allTypes: [],
      productType: 'Select Type', 
      // [{makerName: 'John Smith', makerID: 'm1234567'}]
      allMakers: [],
      selectedMaker: 'Select Maker',
      makerName: '',
      makerID: '',
      status: 'staged',
      // [{propertyAddress: '123 Main St, propertyID: 'p12345'}]
      allProprties: [],
      propertyName: '',
      propertyID: '',
      installDate: ''
    }

    this.handleUploadState = this.handleUploadStart.bind(this)
    this.handleProgress = this.handleProgress.bind(this)
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this)

    this.handleText = this.handleText.bind(this)
    this.saveProduct = this.saveProduct.bind(this)
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

  
  handleText = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  toggle = () => {
    // control drop downs
  }

  saveProduct = () => {
    console.log(this.state)
    const db = firebase.firestore()
    db.collection('products').doc().set({
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
    }).then(function(docRef) {
      // call method from parent coponent to change state and close edit
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      // expose error to user
      console.error("Error adding document: ", error);
    });
  }

  componentDidMount() {
    // query to get all the types of products
    // if super user get all makers names and id's
    // if maker set state with maker info (name and id) for upload
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
      <div className="addProduct">
        <Card className='add-card'>
            { this.state.imageURL != null
              ? <img src={this.state.imageURL} alt='maker uploaded product'/>
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
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md">
                          <DropdownToggle caret>
                            {this.state.selectedMaker}
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem onClick={this.setType}>Johnny Appleseed</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </FormGroup>
                    </Col>
                  : null 
                }

                <Col md="4">
                  <FormGroup className="add-dropdown">
                    <label>Product Type</label>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md">
                      <DropdownToggle caret>
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
                      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md">
                        <DropdownToggle caret>
                          {this.state.status}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={this.setType}>Available</DropdownItem>
                          <DropdownItem onClick={this.setType}>Requested</DropdownItem>
                          <DropdownItem onClick={this.setType}>Staged</DropdownItem>
                          <DropdownItem onClick={this.setType}>Sold</DropdownItem>
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
                      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md">
                        <DropdownToggle caret>
                          Location
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={this.setType}>Johnny Appleseed</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </FormGroup>
                  </Col>

                  <Col md="4" >
                    <FormGroup className="add-dropdown">
                      <label>Staging Date</label>
                      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md">
                        <DropdownToggle caret>
                          Date
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={this.setType}>Johnny Appleseed</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
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
                        type="textarea"
                        cols="80"
                        rows="8"
                        id="notes"
                    />
                    </FormGroup>
                  </Col>
                </Row>
                : null
              }

              <Row>
                <Button className='btn-center' onClick={this.saveProduct}>Save Product</Button>
              </Row>

            </Form>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default addProduct;