import React from "react";
import classnames from "classnames";
import firebase from 'firebase';
// reactstrap components
import {
  Row,
  Col,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
} from "reactstrap";


class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.setRole = this.setRole.bind(this);
    this.state = {
      dropdownOpen: false,
      role: "Select Role"
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  setRole(e){
    let newRole =  e.currentTarget.textContent;
    const { selectRole } = this.props;
    selectRole(newRole);
    this.setState({
      role: newRole
    })
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // console.log(user)
        const db = firebase.firestore();
        let accountRef = db.collection('users').doc(user.email)
        accountRef.get().then( doc => {
          let signedIn = doc.data();
          // console.log(signedIn)
          // setUserRole(signedIn);
        // User is signed in.
        });
      } else {
        console.log('this hsit got hit')
      }
    });
  }
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col sm="4">
            <p>Help us understand your needs </p> <br/>
            <p>possible location for an illustration?</p>
          </Col>
          <Col sm="4">
            <Col sm="2"></Col>
            <Col sm="2">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md">
              <DropdownToggle caret>
                {this.state.role}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.setRole}>Maker</DropdownItem>
                <DropdownItem onClick={this.setRole}>Real Estate Agent</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            </Col>
          </Col>
        </Row>
      </>
    );
  }
}

export default Wizard;
