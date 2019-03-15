import React from "react";
import classnames from "classnames";

// reactstrap components
import { Row, Col } from "reactstrap";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      design: false,
      code: false,
      develop: false
    };
  }
  clickChoice = choiceName => {
    this.setState({
      [choiceName]: !this.state[choiceName]
    });
  };
  render() {
    return (
      <>
        <h5 className="info-text">What do you make? (select all)</h5>
        <Row className="justify-content-center">
          <Col lg="10">
            <Row>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.design
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("design")}
                >
                  <input
                    defaultValue="Design"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.design}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <h6>Design</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", { active: this.state.code })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("code")}
                >
                  <input
                    defaultValue="Code"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.code}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-laptop" />
                  </div>
                  <h6>Code</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.develop
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("develop")}
                >
                  <input
                    defaultValue="Develop"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.develop}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Develop</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.develop
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("develop")}
                >
                  <input
                    defaultValue="Develop"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.develop}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Develop</h6>
                </div>
              </Col>
            </Row>


            <Row>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.design
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("design")}
                >
                  <input
                    defaultValue="Design"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.design}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <h6>Design</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", { active: this.state.code })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("code")}
                >
                  <input
                    defaultValue="Code"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.code}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-laptop" />
                  </div>
                  <h6>Code</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.develop
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("develop")}
                >
                  <input
                    defaultValue="Develop"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.develop}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Develop</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.develop
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("develop")}
                >
                  <input
                    defaultValue="Develop"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.develop}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Develop</h6>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.design
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("design")}
                >
                  <input
                    defaultValue="Design"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.design}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <h6>Design</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", { active: this.state.code })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("code")}
                >
                  <input
                    defaultValue="Code"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.code}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-laptop" />
                  </div>
                  <h6>Code</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.develop
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("develop")}
                >
                  <input
                    defaultValue="Develop"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.develop}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Develop</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.develop
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("develop")}
                >
                  <input
                    defaultValue="Develop"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.develop}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Develop</h6>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.design
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("design")}
                >
                  <input
                    defaultValue="Design"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.design}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <h6>Design</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", { active: this.state.code })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("code")}
                >
                  <input
                    defaultValue="Code"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.code}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-laptop" />
                  </div>
                  <h6>Code</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.develop
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("develop")}
                >
                  <input
                    defaultValue="Develop"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.develop}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Develop</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.develop
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("develop")}
                >
                  <input
                    defaultValue="Develop"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.develop}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Develop</h6>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Wizard;
