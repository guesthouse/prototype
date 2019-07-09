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

  
  toggleVisbility = () => {
    this.state.moduleVisibility === 'showBase' 
    ? this.setState({
        moduleVisibility: 'hideBase'
      })
    : this.setState({
      moduleVisibility: 'showBase'
    })
  }

  componentDidMount() {
    let propertyID = this.props.match.params.id
    const db = firebase.firestore();

    db.collection('properties').doc(propertyID).get().then( doc => {
      let data = doc.data();
      this.setState({
        account_id: data.account_id,
        address: data.address,
        bathNumber: data.bathNumber,
        bedNumber: data.bedNumber,
        description: data.description,
        listingPrice: data.listingPrice,
        propertyType: data.propertyType,
        propertyURL: data.propertyURL,
        stageDate: data.stageDate,
        status: data.status,
        imageURL: data.imageURL,
        additionalInfo: data.additionalInfo
      });
    });

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
                    src={this.state.imageURL}
                  />
                </div>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="8">
                        <FormGroup>
                          <label>Address</label>
                          <h6>{this.state.address}</h6>
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="4">
                      <div  className="button-align">
                        <label>Listing URL</label>
                        <h6>{this.state.address}</h6>
                      </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Type</label>
                          <h6>{this.state.propertyType}</h6>
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Description</label>
                          <h6>{this.state.description}</h6>
                        </FormGroup>
                      </Col>
                    </Row>
                    <h5>Details</h5>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label>Bedroom Number</label>
                          <h6>{this.state.bedNumber}</h6>
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label>Bathroom Number</label>
                          <h6>{this.state.bathNumber}</h6>
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label>Address</label>
                          <h6>{this.state.address}</h6>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Additional Information</label>
                          <p>{this.state.additionalInfo}</p>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Button className='btn-center' onClick={this.toggleVisbility}>Edit Property</Button>
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
          </Row>
      </div>
    );
  }
}

export default PropertyDetail;
