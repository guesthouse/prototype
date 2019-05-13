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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row
} from "reactstrap";


class Property extends React.Component {
  constructor(){
    super()

    this.state = {
      properties: [],
      statusColor: 'available'
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.firestore();
        const propertyList = []
        db.collection('properties').where("account_id", "==", user.uid ).get().then( snap => {
          snap.forEach((doc)=>{
            console.log(doc.data())
            let property = {id: doc.id, data: doc.data()}
            propertyList.push(property);
          });
          this.setState({
            properties: propertyList
          });
        });
        db.collection('users').doc(user.uid ).get().then( doc => {
          let user = doc.data();
          let fullname = user.firstname + " " + user.lastname
          this.setState({
            fullname: fullname
          })
        });
        console.log(this.state.properties)
      } else {
        // No user is signed in.
      }
    });
  }
  render() {
    return (
      <div className="property"> 
        <Col lg="3" md="3" sm={{size: "3", offset: 9}}>
          <UncontrolledDropdown>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              className="btn-round btn-block"
              color="primary"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              type="button"
            >
              Manage Properties
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="dropdownMenuButton"
              right
            >
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Properties Overview
              </DropdownItem>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Add Property
              </DropdownItem>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                History
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>

        { this.state.properties.length == 0 &&
          <Col lg="6" md="6" sm={{size: "6", offset: 3}}>
            <h3 className='zero'>
              You Currently Do Not Have Any Properties
            </h3>
            <Col sm={{size: "6", offset: 4}}>
              <Button className="btn-round" sm={{size: "6", offset: 4}}color="primary">
                  + Add Property
              </Button>
            </Col>
          </Col>
        }

        <div className='flex-row'>
          {(this.state.properties).map((e,i)=>{
            return (
              <Card className="card-user-flex" md='4' key={i}>
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
                              {e.data.address}
                            </h5>
                          </Col>
                          <Col className="mr-auto" >
                            <h5 className={this.state.statusColor}>
                              {e.data.status}
                            </h5>
                          </Col>
                        </Row>

                        <Row>
                          <Col></Col>
                          <Col>
                            <h5>{this.state.fullname}</h5> 
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
