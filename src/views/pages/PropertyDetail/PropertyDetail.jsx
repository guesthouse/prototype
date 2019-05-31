import React from "react";
import './PropertyDetail.scss';
import firebase from 'firebase'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Input,
  Container,
  Col,
  Row,
  Form
} from "reactstrap";


class PropertyDetail extends React.Component {
  constructor(){
    super()

    this.showAdd = this.showAdd.bind(this)
  }

  showAdd(){
    console.log('show me the money')
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const db = firebase.firestore();
        let accountRef = db.collection('users').doc(user.email)
        accountRef.get().then( doc => {
    
        // User is signed in.
        });
      } else {
        // No user is signed in.
      }
    });
  }
  render() {
    return (
      <div className="property">
        <Row>
            <Col md="6" sm={{size: "6", offset: 1}}>
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
  
            <Col sm={{size:"2", offset:1}}>
              <Card className="card-add" onClick={this.showAdd}>
                <CardBody>
                  <div className="circle" onClick={this.showAdd}>
                  </div>
                  <span>Add Property</span>
                </CardBody>

              </Card>
            </Col>

          </Row>
          
      </div>
    );
  }
}

export default PropertyDetail;
