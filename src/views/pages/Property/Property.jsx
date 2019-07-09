import React from "react";
import './Property.scss';
import firebase from 'firebase';
import {Link} from 'react-router-dom';
import AddProperty from './../../partials/addProperty/addProperty.jsx';
import {
  Button,
  Card,
  CardBody,
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
      statusColor: 'available',
      moduleVisibility: 'hideBase'
    }

    // this.toggleVisbility = this.toggleVisbility.bind(this)
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.firestore();
        const propertyList = []
        db.collection('properties').get().then( snap => {
          snap.forEach((doc)=>{
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
      } else {
        // No user is signed in.
      }
    });
  }
  render() {
    return (
      <div className="property"> 
      {this.state.moduleVisibility == 'showBase' 
        ? <div>
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
                onClick={this.toggleVisbility}
              >
                Add Property
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>

        { this.state.properties.length === 0 
          ? <Col lg="6" md="6" sm={{size: "6", offset: 3}}>
              <h3 className='zero'>
                You Currently Do Not Have Any Properties
              </h3>
              <Col sm={{size: "6", offset: 4}}>
                <Button className="btn-round" sm={{size: "6", offset: 4}}color="primary">
                    + Add Property
                </Button>
              </Col>
            </Col>
          : <div className='flex-row'>
            {(this.state.properties).map((e,i)=>{
              return (
                <Link to={`/admin/properties/${e.id}`}key={i} >
                  <Card className="card-user-flex" md='4'>
                    <div className="property-image">
                      <img
                        alt="..."
                        src={e.data.imageURL}
                      />
                    </div>
                  </Card>
                  <Row>
                    <Col className="ml-auto">
                      <h5>
                        {e.data.address}
                      </h5>
                    </Col>
                  </Row>

                  <Row>    
                    <Col className="ml-auto">
                      <h5 className={this.state.statusColor}>
                        {e.data.status}
                      </h5>
                    </Col>
                  </Row>

                  <Row>
                    <Col  className="mr-auto">
                      <h5>{this.state.fullname}</h5> 
                    </Col>
                  </Row>
                </Link>
              )
            })}
          </div>
        }
          </div>
          : <AddProperty user={this.state.user} closeModal={this.toggleVisbility}>        
           </AddProperty>
        }
      </div>
    );
  }
}

export default Property;
