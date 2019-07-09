import React from "react";
import './AddPhotos.scss';
import firebase from 'firebase';
import {Link} from 'react-router-dom';
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


class AddPhotos extends React.Component {
  constructor(){
    super()

    this.state = {
      photos: [],
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
        const photoList = []
        db.collection('photos').get().then( snap => {
          snap.forEach((doc)=>{
            let image =  doc.data()
            photoList.push(image);
          });
          this.setState({
            photos: photoList
          });
        });

      } else {
        // No user is signed in.
      }
    });
  }
  render() {
    return (
      <div className="add-photos"> 
         <div className='flex-row'>
            {(this.state.photos).map((e,i)=>{
              return (
                  <Card className="card-user-flex" md='4'>
                    <div className="property-image">
                      <img
                        alt="..."
                        src={e.data.imageURL}
                      />
                    </div>
                  </Card>
              )
            })}
          </div>
      </div>
    );
  }
}

export default AddPhotos;
