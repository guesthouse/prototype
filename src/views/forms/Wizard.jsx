import React from "react";
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";

// wizard steps
import Step0 from "./WizardSteps/Step0.jsx";
import RealEstate1 from "./WizardSteps/RealEstate1.jsx";
import RealEstate2 from "./WizardSteps/RealEstate2.jsx";
import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";

var real_estate_steps = [
  {
    stepName: "Real Estate Info",
    stepIcon: "nc-icon nc-single-02",
    component: RealEstate1
  },
  {
    stepName: "Real Estate Request",
    stepIcon: "nc-icon nc-single-02",
    component: RealEstate2
  },
  {
    stepName: "Addiontal Info",
    stepIcon: "nc-icon nc-alert-circle-i",
    component: Step3
  }
];

var maker_steps =[
  {
    stepName: "Maker Info",
    stepIcon: "nc-icon nc-single-02",
    component: Step1
  },
  {
    stepName: "What You Make",
    stepIcon: "nc-icon nc-ruler-pencil",
    component: Step2
  },
  {
    stepName: "Addiontal Info",
    stepIcon: "nc-icon nc-alert-circle-i",
    component: Step3
  }
];


class Wizard extends React.Component {
  constructor(props){
    super(props)
    this.selectUserRole = this.selectUserRole.bind(this)
    this.storeAgentDetails = this.storeAgentDetails.bind(this)
    this.storeMakerDetails = this.storeMakerDetails.bind(this)
    this.state = {
      selectedSteps:  [
        {
          stepName: "Select Role",
          stepIcon: "nc-icon nc-single-02",
          component: Step0,
          stepProps: { selectRole: this.selectUserRole}
        }, {stepName: " "},{stepName: " "},{stepName: " ",}
      ],
      roles: '',
    }
  }

  selectUserRole(role){
    if (role === 'Maker'){
      let steps = this.state.selectedSteps
      if (steps.length > 1) {steps.splice(1)} 
      let allSteps = steps.concat(maker_steps)
      this.setState({ selectedSteps: allSteps });
    } else if (role === 'Real Estate Agent') {
      let steps = this.state.selectedSteps
      if (steps.length > 1) {steps.splice(1)}
      let allSteps = steps.concat(real_estate_steps)
      this.setState({ selectedSteps: allSteps });
    };
  };

  storeAgentDetails(allStates) {
    const db = firebase.firestore();
    console.log(allStates)
    console.log(allStates["Real Estate Info"])
    let user_id =  allStates["Real Estate Info"].user.user_id;

    db.collection('users').doc(user_id).update({
      firstname: allStates["Real Estate Info"].firstname,
      lastname: allStates["Real Estate Info"].lastname,
      email: allStates["Real Estate Info"].email,
      businessName: allStates["Real Estate Info"].businessName,
      averagePrice: allStates["Real Estate Info"].firstname,
      location: allStates["Real Estate Info"].location,
      phone: allStates["Real Estate Info"].phone,
      propertyType: allStates["Real Estate Info"].propertyType,
      userRole: allStates["Select Role"].role
    }).then( (docRef) => {
      db.collection('properties').doc().set({ 
        address: allStates["Real Estate Request"].address,
        bathNumber: allStates["Real Estate Request"].bathNumber,
        bedNumber: allStates["Real Estate Request"].bedNumber,
        stageDate: allStates["Real Estate Request"].dateTimeForStage,
        description: allStates["Real Estate Request"].description,
        listingPrice: allStates["Real Estate Request"].listingPrice,
        propertyType: allStates["Real Estate Request"].typeOfProperty,
        propertyURL: allStates["Real Estate Request"].url,
      }).then((res) => {
        window.location = '/property'
      }).catch((error) => {
        console.error("Error adding document: ", error);
      })
    }).catch(function(error) {
      console.error("Error adding document: ", error);
    });
  };

  storeMakerDetails(allStates){
    const db = firebase.firestore();
    let user_id =  allStates["Maker Info"].user.user_id;

    db.collection('users').doc(user_id).update({
      firstname: allStates["Maker Info"].firstname,
      lastname: allStates["Maker Info"].lastname,
      email: allStates["Maker Info"].email,
      businessName: allStates["Maker Info"].businessName,
      averagePrice: allStates["Maker Info"].averagePrice,
      location: allStates["Maker Info"].location,
      phone: allStates["Maker Info"].phone,
      propertyType: allStates["Maker Info"].propertyType,
      userRole: allStates["Select Role"].role
    }).then( (docRef) => {
      db.collection('properties').doc().set({ 
        address: allStates["What You Make"].address,
        bathNumber: allStates["What You Make"].bathNumber,
        bedNumber: allStates["What You Make"].bedNumber,
        stageDate: allStates["What You Make"].dateTimeForStage,
        description: allStates["What You Make"].description,
        listingPrice: allStates["What You Make"].listingPrice,
        propertyType: allStates["What You Make"].typeOfProperty,
        propertyURL: allStates["What You Make"].url,
      }).then((res) => {
        window.location = '/property'
      }).catch((error) => {
        console.error("Error adding document: ", error);
      })
    }).catch(function(error) {
      console.error("Error adding document: ", error);
    });
  };

  finishButtonClick(allStates){
    const db = firebase.firestore();
    if (allStates["Select Role"].role === "Real Estate Agent"){
      const user_id =  allStates["Real Estate Info"].user.user_id;
      db.collection('users').doc(user_id).update({
        firstname: allStates["Real Estate Info"].firstname,
        lastname: allStates["Real Estate Info"].lastname,
        email: allStates["Real Estate Info"].email,
        businessName: allStates["Real Estate Info"].businessName,
        averagePrice: allStates["Real Estate Info"].firstname,
        location: allStates["Real Estate Info"].location,
        phone: allStates["Real Estate Info"].phone,
        propertyType: allStates["Real Estate Info"].propertyType,
        userRole: allStates["Select Role"].role
      }).then( (docRef) => {
        db.collection('properties').doc().set({ 
          account_id: user_id,
          address: allStates["Real Estate Request"].address,
          bathNumber: allStates["Real Estate Request"].bathNumber,
          bedNumber: allStates["Real Estate Request"].bedNumber,
          stageDate: allStates["Real Estate Request"].dateTimeForStage,
          description: allStates["Real Estate Request"].description,
          listingPrice: allStates["Real Estate Request"].listingPrice,
          propertyType: allStates["Real Estate Request"].typeOfProperty,
          propertyURL: allStates["Real Estate Request"].url,
          status: 'requested'
        }).then((res) => {
          window.location = '/admin/property'
        }).catch((error) => {
          console.error("Error adding document: ", error);
        })
      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }else if (allStates["Select Role"].role === "Maker"){
      const user_id = allStates["Maker Info"].user.user_id;
      db.collection('users').doc(user_id).update({
        firstname: allStates["Maker Info"].firstname,
        lastname: allStates["Maker Info"].lastname,
        email: allStates["Maker Info"].email,
        businessName: allStates["Maker Info"].businessName,
        location: allStates["Maker Info"].location,
        phone: allStates["Maker Info"].phone,
        furnitureType: allStates["What You Make"],
        userRole: allStates["Select Role"].role
      }).then( (docRef) => {
        window.location = '/admin/furniture'
      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }    
  }

  render() {
    return (
      <>
        <div className="content">
          <Col className="mr-auto ml-auto" md="10">
            <ReactWizard
              steps={this.state.selectedSteps}
              navSteps
              validate
              title="Build Your Profile"
              description="This information will let us know more about you."
              headerTextCenter
              finishButtonClasses="btn-wd"
              nextButtonClasses="btn-wd"
              previousButtonClasses="btn-wd"
              finishButtonClick={this.finishButtonClick}
            />
          </Col>
        </div>
      </>
    );
  }
}

export default Wizard;
