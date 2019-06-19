import React from "react";
import './PropertyDetail.scss';
import firebase from 'firebase';
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


class PropertyDetail extends React.Component {
  constructor(){
    super()
    this.state = {
      property: {},
      rooms: [],
      showAddModal: false,
      dropdownOpen: false,
      dropdownOpenMakers: false,
      furnitureType: 'Furniture',

      roomName: '',
      roomSize: '',
      furnitureItems: [],
      makers: []

    }

    this.toggle = this.toggle.bind(this);
    this.toggleMakers = this.toggleMakers.bind(this)
    this.showAdd = this.showAdd.bind(this);
    this.hideAdd = this.hideAdd.bind(this);
  }

  showAdd(){
    const db = firebase.firestore();
    let accountRef = db.collection('users').doc()
    this.setState({
      showAddModal: true,
    });
  };

  hideAdd(){
    this.setState({
      showAddModal: false,
    });
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  toggleMakers() {
    this.setState(prevState => ({
      dropdownOpenMakers: !prevState.dropdownOpenMakers,
    }));
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
    let accountRef = db.collection('users').where("userRole", "==", 'Maker' )
    accountRef.get().then( snap => {
      snap.forEach((doc)=>{
        let user = {id: doc.id, data: doc.data()}
        userList.push(user);
      });
      this.setState({
        makers: userList
      });
    });
    // No user is signed in. route to register
  }
  render() {
    return (
      <div className="property">
        <Row>
            <Col md="6" sm={{size: "6"}}>
              <Card className="card-details">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/bg/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="8">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            // defaultValue={this.state.user.businessName}
                            placeholder="Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="4">
                      <div  className="button-align">
                        <Button>Listing URL</Button>
                      </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Type</label>
                          <Input
                            // defaultValue={this.state.user.firstname}
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Description</label>
                          <Input
                            // defaultValue={this.state.user.lastname}
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <h5>Details</h5>
                    <Row>
                      <Col md="4">
                          <Input
                            // defaultValue={this.state.user.location}
                            placeholder="Bed Number"
                            type="text"
                          />
                      </Col>
                      <Col md="4">
                          <Input
                            // defaultValue={this.state.user.location}
                            placeholder="Bath Number"
                            type="text"
                          />
                      </Col>
                      <Col md="4">
                          <Input
                            // defaultValue={this.state.user.location}
                            placeholder="Date For Staging"
                            type="text"
                          />
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
                            // defaultValue={this.state.user.additionalInfo}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            { this.state.showAddModal === false &&
              <Col sm={{size:"2", offset:1}}>
                  <Card className="card-add" onClick={this.showAdd}>
                    <CardBody>
                      <div className="circle" onClick={this.showAdd}>
                      </div>
                      <span>Add Room</span>
                    </CardBody>
                  </Card>
              </Col>
            }
            { this.state.showAddModal === true &&
                <Col sm={{size:"6"}}>
                  <Card className="card-add-info">
                    <CardBody>
                      <Row>
                        <Col>
                          <div className="close" onClick={this.hideAdd}>X</div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Room Name</label>
                            <Input
                              className="text"
                              // defaultValue={this.state.user.additionalInfo}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                       <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Room Name</label>
                            <Input
                              className="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="6">
                          <FormGroup>
                            <label>Room Square Footage</label>
                            <Input
                              className="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Furniture</label>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md">
                              <DropdownToggle caret>
                                {this.state.furnitureType}
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

                        <Col md="6">
                          <FormGroup>
                            <label>Makers</label>
                            <Dropdown isOpen={this.state.dropdownOpenMakers} toggle={this.toggleMakers} size="md">
                              <DropdownToggle caret>
                                Makers
                              </DropdownToggle>
                              <DropdownMenu>
                              {(this.state.makers).map((e,i)=>{
                                return (
                                <DropdownItem onClick={this.setType} key={i}>{e.data.firstname} {e.data.lastname}</DropdownItem>
                              )})};
                              </DropdownMenu>
                            </Dropdown>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Notes</label>
                            <Input
                              className="textarea"
                              type="textarea"
                              cols="80"
                              rows="4"
                              // defaultValue={this.state.user.additionalInfo}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col  md="12">
                          <Button>Add Room</Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
            }
          </Row>
{/* loop over rooms here */}

{(this.state.rooms).map((e,i)=>{
  return (
    <div></div>
  ) 
})}
          <Row>
            <Col sm={{size:"4"}}>
              <Card>
                <CardHeader>Living Room</CardHeader>
                <CardBody>
                  <Row>
                    <Col  md="12">
                      <span>Room Size: 150 SF</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Furniture Items:</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Makers:</span>
                      <Row>
                        <div className='makerHolder'></div>
                        <div className='makerHolder'></div>
                        <div className='makerHolder'></div>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Notes:</span>
                    </Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>

            <Col sm={{size:"4"}}>
              <Card>
                <CardHeader>Kitchen</CardHeader>
                <CardBody>
                  <Row>
                    <Col  md="12">
                      <span>Room Size: 150 SF</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Furniture Items:</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Makers:</span>
                      <Row>
                        <div className='makerHolder'></div>
                        <div className='makerHolder'></div>
                        <div className='makerHolder'></div>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Notes:</span>
                    </Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>

            <Col sm={{size:"4"}}>
              <Card>
                <CardHeader>Dining Room</CardHeader>
                <CardBody>
                  <Row>
                    <Col  md="12">
                      <span>Room Size: 150 SF</span>
                      
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Furniture Items:</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Makers:</span>
                      <Row>
                        <div className='makerHolder'></div>
                        <div className='makerHolder'></div>
                      </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col  md="12">
                      <span>Notes:</span>
                    </Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={{size:"4"}}>
              <Card>
                <CardHeader>Master Bed</CardHeader>
                <CardBody>
                  <Row>
                    <Col  md="12">
                      <span>Room Size: 150 SF</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Furniture Items:</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Makers:</span>
                      <Row>
                        <div className='makerHolder'></div>
                        <div className='makerHolder'></div>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Notes:</span>
                    </Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>
            
            <Col sm={{size:"4"}}>
              <Card>
                <CardHeader>Room Name</CardHeader>
                <CardBody>
                  <Row>
                    <Col  md="12">
                      <span>Room Size: 150 SF</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Furniture Items:</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Makers:</span>
                      <Row>
                        <div className='makerHolder'></div>
                      </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col  md="12">
                      <span>Notes:</span>
                    </Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>

            <Col sm={{size:"4"}}>
              <Card>
                <CardHeader>Room Name</CardHeader>
                <CardBody>
                  <Row>
                    <Col  md="12">
                      <span>Room Size: 150 SF</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Furniture Items:</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <span>Makers:</span>
                      <Row>
                        <div className='makerHolder'></div>
                        <div className='makerHolder'></div>
                      </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col  md="12">
                      <span>Notes:</span>
                    </Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    );
  }
}

export default PropertyDetail;
