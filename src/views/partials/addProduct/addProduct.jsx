import React from "react";
import './addProduct.scss';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader/lib/CustomUploadButton';
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Dropdown,
  UncontrolledDropdown,
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
      imageUrl: null,
      title: '',
      price: '',
      allTypes: [],
      productType: 'Select Type', 
      allMakers: [],
      selectedMaker: 'Select Maker',
      status: 'staged',
      stagedLocation: [],
      stagedDate: [],
      archived: false
    }
    this.handleText = this.handleText.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.uploadPhotos = this.uploadPhotos.bind(this)
    this.saveProduct = this.saveProduct.bind(this)
  }

  
  handleText = () => {
    // set state for values on input fields 
    // use e, handle all fields with one method
  }

  handleSelect = () => {
    // set state from the values selected on dropdown
    // use e, do this with one method
  }

  uploadPhotos = () => {
    // upload photos to google cloud and store URLs onstate 
    // set header image and hide upload button (will happen on state change)
  }

  saveProduct = () => {
    // on success hide the add product modal (pass a method to set state from the parent component)
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
            { this.state.imageUrl 
              ? <img src={this.state.imageUrl} alt='Uploaded image of product'/>
              : <div className='add-image'>
                <div className="center">
                  <FileUploader
                    accept="image/*"
                    multiple
                    name="productPhotos"
                    randomizeFilename
                    storageRef={firebase.storage().ref('images')}
                    onUploadStart={ this.handleUploadStart }
                    onUploadError={ this.handleUploadError }
                    onUploadSuccess={ this.handleUploadMultipleSuccess }
                    onProgress={ this.handleProgress }
                    style={ uploadStyle }
                  >+ Photos
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