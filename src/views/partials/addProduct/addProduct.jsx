import React from "react";
import './addProduct.scss';
import firebase from 'firebase';
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
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="addProduct">
        <Card className='add-card'>
            { this.state.imageUrl 
              ? <img src={this.state.imageUrl} alt='Uploaded image of product'/>
              : <div className='add-image'>
                  <div className='plus-box'> 
                  
                  </div>
                </div>
            }
          <CardBody>
            <Form>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <label>Product Title</label>
                    <Input
                      // defaultValue={this.state.user.businessName}
                      placeholder="Product Title"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col  md="4">
                  <FormGroup className="add-dropdown">
                    <label>Product Type</label>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md" className="product-dropdown">
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
              </Row>
              <Row>
                { this.state.user.role === 'super'
                  ? <Col  md="4">
                      <FormGroup className="add-dropdown">
                        <label>Maker's Name</label>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md" className="product-dropdown">
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
              </Row>

               <Row>
                <Col md="6">
                  <FormGroup>
                    <label>Price</label>
                    <Input
                      // defaultValue={this.state.user.businessName}
                      placeholder="Price"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>

               <Row>
                <Col  md="4">
                  <FormGroup className="add-dropdown">
                    <label>Product Title</label>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md" className="product-dropdown">
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
              </Row>

              <Row>
                <Button className='btn-center'>Add Product</Button>
              </Row>
            </Form>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default addProduct;