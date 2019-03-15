import React from "react";
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";

// wizard steps
import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";

var steps = [
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
  render() {
    return (
      <>
        <div className="content">
          <Col className="mr-auto ml-auto" md="10">
            <ReactWizard
              steps={steps}
              navSteps
              validate
              title="Build Your Profile"
              description="This information will let us know more about you."
              headerTextCenter
              finishButtonClasses="btn-wd"
              nextButtonClasses="btn-wd"
              previousButtonClasses="btn-wd"
            />
          </Col>
        </div>
      </>
    );
  }
}

export default Wizard;
