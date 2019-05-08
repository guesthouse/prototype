import React from "react";
import { Redirect } from 'react-router-dom'
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

  finishButtonClick(){
    window.location = '/admin/dashboard'
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
