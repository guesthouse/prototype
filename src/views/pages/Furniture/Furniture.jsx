import React from "react";
import './Furniture.scss';
import firebase from 'firebase';
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
  Col
} from "reactstrap";


class Furniture extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const db = firebase.firestore();
        let accountRef = db.collection('users').doc(user.email)
        accountRef.get().then( doc => {
          let account = doc.data()


        // User is signed in.
        });
      } else {
        // No user is signed in.
      }
    });
  }
  render() {
    return (
      <div className="furniture">
        <div className='furniture-modal'>
          <div className='img-container'>
            <img src=''/> 
          </div>

          <div className='details-container'>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Furniture;