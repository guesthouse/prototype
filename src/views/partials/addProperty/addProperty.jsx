import React from "react";
import './addProperty.scss';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import FileUploader from 'react-firebase-file-uploader/lib/CustomUploadButton';
import ReactDatetime from "react-datetime";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
  Form
} from "reactstrap";


class AddProperty extends React.Component {
  constructor(){
    super()
    this.state = {
      bedNumberDropdownOpen: false,
      bathNuberDropdownOpen: false,
      installStatusDropdownOpen: false,
      propertyTypeDropdownOpen: false,
      agentNameDropdownOpen: false,

      user : {role: 'super'},
      rooms: [],
      address: '',
      bathNumber: 'Bath Number',
      bedNumber: 'Bed Number',
      description: '',
      listingPrice: '',
      propertyType: 'Property Type',
      propertyURL: '',
      stageDate: '',
      status: '',
      imageURL: null,
      additionalInfo: '',
      selectedAgent: 'Listing Agent',
      allAgents: [],
      agentID: '',
      agentName: '',

      roomName: '',
      roomSize: '',
      furnitureItems: [],
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

  setAgent = (e) => {
    console.log (e.target.innerHTML)
    this.setState ({
      agentID: e.target.id,
      agentName: e.target.innerHTML
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
      status: this.state.status,
      archived: false
    }).then((docRef) => {
      this.props.closeModal();
    })
    .catch(function(error) {
      // expose error to user
      console.error("Error adding document: ", error);
    });
  }

  getMakersAndFurniture(){
    const db = firebase.firestore();
    let furnitureRef = db.collection('furniture').doc()
      furnitureRef.get().then( doc => {
        // 'Get All Furniture In Category
        // 
      });

    let makerRef = db.collection('properties').doc()
      makerRef.get().then( doc => {
        // 'Get All Makers Who have furniture in Category'
        // 
      });
  }

  componentDidMount() {
    const db = firebase.firestore();
    const userList = []
    let accountRef = db.collection('users').where("userRole", "==", 'Real Estate Agent' )
    accountRef.get().then( snap => {
      snap.forEach((doc)=>{
        let user = {id: doc.id, fullname: doc.data().fullname}
        userList.push(user);
      });
      this.setState({
        allAgents: userList
      });
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
      <div className="addProperty">
        {/* <Col md="6" sm={{size: "6"}}> */}
          <Card className="add-card">
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
                  <Col className="pr-1" md="8">
                    <FormGroup>
                      <label>Address</label>
                      <Input
                        placeholder="Address"
                        type="text"
                        onChange={this.handleText}
                        id="address"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="4">
                    <FormGroup>
                      <label>Listing URL</label>
                      <Input
                        placeholder="Address"
                        type="text"
                        onChange={this.handleText}
                        id="propertyURL"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Type</label>
                      <Input
                        placeholder="Property Type"
                        type="text"
                        onChange={this.handleText}
                        id="propertyType"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Description</label>
                      <Input
                        // defaultValue={this.state.user.lastname}
                        placeholder="Description"
                        type="text"
                        onChange={this.handleText}
                        id="description"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="4">
                    <FormGroup className="add-dropdown">
                      <label>Property Type</label>
                      <Dropdown isOpen={this.state.propertyTypeDropdownOpen} toggle={this.toggle} size="md">
                        <DropdownToggle id="propertyType" caret>
                          {this.state.propertyType}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={this.setType}>Sigle Family</DropdownItem>
                          <DropdownItem onClick={this.setType}>Townhouse </DropdownItem>
                          <DropdownItem onClick={this.setType}>Condo</DropdownItem>
                          <DropdownItem onClick={this.setType}>Apartment</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup className="add-dropdown">
                      <label>Bedrooms</label>
                      <Dropdown isOpen={this.state.bedNumberDropdownOpen} toggle={this.toggle} size="md">
                        <DropdownToggle id="bedNumber" caret>
                          {this.state.bedNumber}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={this.setBedNumberr} id='1'>1</DropdownItem>
                          <DropdownItem onClick={this.setBedNumberr} id='1'>2</DropdownItem>
                          <DropdownItem onClick={this.setBedNumberr} id='1'>3</DropdownItem>
                          <DropdownItem onClick={this.setBedNumberr} id='1'>4</DropdownItem>
                          <DropdownItem onClick={this.setBedNumberr} id='1'>5</DropdownItem>
                          <DropdownItem onClick={this.setBedNumberr} id='1'>6</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup className="add-dropdown">
                      <label>Bathrooms</label>
                      <Dropdown isOpen={this.state.bathNumberDropdownOpen} toggle={this.toggle} size="md">
                        <DropdownToggle id="bathNumber" caret>
                          {this.state.bathNumber}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={this.setBathNumberr} id='1'>1</DropdownItem>
                          <DropdownItem onClick={this.setBathNumberr} id='1'>2</DropdownItem>
                          <DropdownItem onClick={this.setBathNumberr} id='1'>3</DropdownItem>
                          <DropdownItem onClick={this.setBathNumberr} id='1'>4</DropdownItem>
                          <DropdownItem onClick={this.setBathNumberr} id='1'>5</DropdownItem>
                          <DropdownItem onClick={this.setBathNumberr} id='1'>6</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  { this.state.user.role === 'super'
                    ? <Col md="4" >
                        <FormGroup className="add-dropdown">
                          <label>Agent's Name</label>
                          <Dropdown isOpen={this.state.agentNameDropdownOpen} toggle={this.toggle} size="md">
                            <DropdownToggle id="makerName" caret>
                              {this.state.selectedAgent}
                            </DropdownToggle>
                            <DropdownMenu>
                              {(this.state.allAgents).map((e,i)=>{
                                return (
                                <DropdownItem onClick={this.setAgent} key={i} id={e.id}>{e.fullName}</DropdownItem>
                                )
                              })}
                            </DropdownMenu>
                          </Dropdown>
                        </FormGroup>
                      </Col>
                    : null 
                  }

                  <Col md="4" >
                    <FormGroup className="add-dropdown">
                      <label>Install Date</label>
                      <ReactDatetime
                        inputProps={{
                          className: "form-control adjust",
                          placeholder: "Pick Date"
                        }}
                        dateFormat='MM-DD-YYYY'
                        closeOnSelect= {true}
                        onChange= {this.setInstallDate}
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Additional Information</label>
                      <Input
                        className="textarea"
                        type="textarea"
                        cols="80"
                        rows="4"
                      />
                    </FormGroup>
                  </Col>
                </Row>

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
                  <Button className='btn-center' onClick={this.saveProduct}>Save Property</Button>
                </Row>

              </Form>
            </CardBody>
          </Card>

       
      </div>
    );
  }
}

export default AddProperty;
