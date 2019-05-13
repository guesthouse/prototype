import React from "react";
import './Property.scss';
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
  Row
} from "reactstrap";


class Property extends React.Component {
  constructor(){
    super()

    this.state = {
      properties: [1, 1 , 1, 1, 1, 1 ,1, 1],
      statusColor: 'available'
    }
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
        <button>Add Property</button>
        <div className='flex-row'>
          {(this.state.properties).map((e,i)=>{
            return (
              <Card className="card-user-flex" md='4'>
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/bg/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="button-container">
                        <Row>
                          <Col className="ml-auto">
                            <h5>
                              Furniture Type 
                            </h5>
                          </Col>
                          <Col className="mr-auto" >
                            <h5 className={this.state.statusColor}>
                              Status
                            </h5>
                          </Col>
                        </Row>

                        <Row>
                          <Col></Col>
                          <Col>
                            <h5>Agent Name</h5> 
                          </Col>
                        </Row>
                      </div>
                    </a>
                </CardBody>
              </Card>
            )
            })}
          </div>
      </div>
    );
  }
}

export default Property;
