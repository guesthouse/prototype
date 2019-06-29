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
      furniture: [],
      imageUrl: null,
      productType: 'Select Type', 
      user : {role: 'super'},
      selectedMaker: 'Select Maker',
      status: 'Select Status'
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

  }

  saveProduct = () => {
    
  }

  componentDidMount() {
    // query to get all the types of makers and 
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
                      // defaultValue={this.state.user.businessName}
                      placeholder="Product Title"
                      type="text"
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
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md" className="product-drop">
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
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md" className="product-drop">
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
                      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md" className="product-drop">
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

               <Row>
                <Col md="6">
                  <FormGroup>
                    <label>Price</label>
                    <Input
                      placeholder="Price"
                      type="nummeric"
                      onChange={this.handleText}
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
                        className="textarea"
                        type="textarea"
                        cols="80"
                        rows="4"
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