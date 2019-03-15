import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import { FormGroup, Input, Row, Col } from "reactstrap";

class Wizard extends React.Component {
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col sm="12">
            <h5 className="info-text">What else would you like us to know?</h5>
          </Col>
          <Col sm="7">
            <FormGroup>
              <label>Additional Information</label>
              <Input type="textarea"/>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Wizard;
