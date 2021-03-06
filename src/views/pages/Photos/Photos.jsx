import React from "react";
import './Photos.scss';
import firebase from 'firebase';
import {Link} from 'react-router-dom';
import AddPhotos from './../../partials/AddPhotos/AddPhotos.jsx';
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


class Photos extends React.Component {
  constructor(){
    super()

    this.state = {
      photos: [],
      moduleVisibility: 'showBase'
    }

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
            let data =  doc.data()
            photoList.push(data);
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
      <div className="view-photos"> 
        {this.state.moduleVisibility == 'showBase' 
          ? <div>
            <Button className="btn-add" onClick={this.toggleVisbility}>Add Photos</Button>
              <div className='flex-row'>
                {(this.state.photos).map((e,i)=>{
                  return (
                    <Card className="card-user-flex spaced" md='4' key={i}>
                      <img
                        alt="..."
                        src={e.imageURL}
                      />
                    </Card>
                  )
                })}
              </div>
            </div>
          : <AddPhotos user={this.state.user} closeModal={this.toggleVisbility}/>
        }
      </div>
    );
  }
}

export default Photos;