import React from "react";
import './AddPhotos.scss';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import FileUploader from 'react-firebase-file-uploader/lib/CustomUploadButton';
import {Link} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Dropdown,
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
      allProperties: [],
      allMakers: [],

      progress: '',
      isUploading: false,
      photos: []
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

  handleUploadStart = () => {
    this.setState({isUploading: true, progress: 0});
  }

  handleProgress = (progress) => {
    this.setState({progress});
  }

  handleUploadSuccess = (filename) => {
    this.setState({
        avatar: filename, 
        progress: 100,
        isUploading: false,
    });
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url => {
        let photos = this.state.photos
        photos.push(url)
        this.setState({
        photos: photos,
        })
    });
  };

  componentDidMount() {
    const db = firebase.firestore();
    // get all makers

    // db.collection('users').get().where('userRole' === 'Maker').then( snap => {
    //   snap.forEach((doc)=>{
    //     let image =  doc.data()
    //     photoList.push(image);
    //   });
    //   this.setState({
    //     photos: photoList
    //   });
    // });

    // get all properties

    // db.collection('properties').get().then( snap => {
    //   snap.forEach((doc)=>{
    //     let image =  doc.data()
    //     photoList.push(image);
    //   });
    //   this.setState({
    //     photos: photoList
    //   });
    // });
  }

  render() {
    let uploadStyle = { 
      width: '100px', 
      height: '100px', 
      fontSize:'18px', 
      color: 'white',
      padding: 15, 
      margin:'auto', 
      borderRadius: 5, 
      cursor: 'pointer',
      border: 'solid 2px white',
      textAlign: 'center',
      backgroundColor: 'grey'
    }
    return (
      <div className="add-photos"> 
        <Button onClick={this.props.closeModal} className="btn-close">Cancel</Button>

        <div className='flex-row'>
          <FormGroup className="add-dropdown">
            <label>Maker</label>
            <Dropdown isOpen={this.state.installLocationDropdownOpen} toggle={this.toggle} size="md">
              <DropdownToggle id="installLocation" caret>
                {this.state.propertyName}
              </DropdownToggle>
              <DropdownMenu>
                {(this.state.allProperties).map((e,i)=>{
                  return (
                    <DropdownItem onClick={this.setLocation} key={i} id={e.id}>{e.address}</DropdownItem>
                  )
                })}
              </DropdownMenu>
            </Dropdown>
          </FormGroup>

          <FormGroup className="add-dropdown">
            <label>Property</label>
            <Dropdown isOpen={this.state.installLocationDropdownOpen} toggle={this.toggle} size="md">
              <DropdownToggle id="installLocation" caret>
                {this.state.propertyName}
              </DropdownToggle>
              <DropdownMenu>
                {(this.state.allProperties).map((e,i)=>{
                  return (
                    <DropdownItem onClick={this.setLocation} key={i} id={e.id}>{e.address}</DropdownItem>
                  )
                })}
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
        </div>

        { this.state.photos.length === 0
          ?<div>
            <FileUploader
              accept="image/*"
              multiple
              name="avatar"
              randomizeFilename
              storageRef={firebase.storage().ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
              style={uploadStyle}
          >Upload Photos
          </FileUploader>
          </div>
          
          : <div>
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
        }
      </div>
    );
  }
}

export default AddPhotos;
