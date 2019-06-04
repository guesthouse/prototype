import React from "react";
import Wizard from "views/forms/Wizard.jsx";
import './BuildProfile.scss';
import {
} from "reactstrap";


class BuildProfile extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("register-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
  }
  render() {
  return (
    <div className="buildProfile full-page">
      <div className="step-container">
        <Wizard/>
      </div>
      <div
          className="full-page-background"
          style={{
            
            backgroundImage: `url(${require("assets/img/bedroom.jpg")})`
          }}
      />
    </div>
    );
  }
}

export default BuildProfile;
