import React from "react";
import './FurnitureDetail.scss';
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


class FurnitureDetail extends React.Component {
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
      <div className="furniture">
    
      </div>
    );
  }
}

export default FurnitureDetail;