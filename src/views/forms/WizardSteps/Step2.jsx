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
      develop: false,
      pottery: false,
      tables: false,
      chairs: false,
      rugs: false,
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
                  className={classnames("choice", { active: this.state.beds })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("beds")}
                >
                  <input
                    defaultValue="beds"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.beds}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <h6>Beds</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", { active: this.state.desks })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("desks")}
                >
                  <input
                    defaultValue="desks"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.desks}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-laptop" />
                  </div>
                  <h6>Desks</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.seating
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("seating")}
                >
                  <input
                    defaultValue="seating"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.seating}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Seating</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.storage
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("storage")}
                >
                  <input
                    defaultValue="storage"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.storage}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Storage</h6>
                </div>
              </Col>
            </Row>


            <Row>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.tables
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("tables")}
                >
                  <input
                    defaultValue="tables"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.tables}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <h6>Tables</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", { active: this.state.lighting })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("lighting")}
                >
                  <input
                    defaultValue="lighting"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.lighting}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-laptop" />
                  </div>
                  <h6>Lighting</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.area
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("area")}
                >
                  <input
                    defaultValue="area"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.area}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Area</h6>
                </div>
              </Col>
              <Col sm="3">
                <div
                  className={classnames("choice", {
                    active: this.state.medium
                  })}
                  data-toggle="wizard-checkbox"
                  onClick={() => this.clickChoice("medium")}
                >
                  <input
                    defaultValue="medium"
                    name="jobb"
                    type="checkbox"
                    defaultChecked={this.state.medium}
                  />
                  <div className="icon">
                    <i className="nc-icon nc-atom" />
                  </div>
                  <h6>Medium</h6>
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
