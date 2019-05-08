import React from "react";
import classnames from "classnames";
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import PictureUpload from "components/CustomUpload/PictureUpload.jsx";

// Name (first and last) 	Text Field 
// Business Name	Text Field 
// Email	Email, validated
// Phone Number	Phone # validated
// Type of Homes	Location 
// Average Price Point 	Number, validated
// City They Sell In	Location 
class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      propertyType: "",
      averagePrice: "",
      location: "",
      businessName: "",

      firstnameState: "",
      lastnameState: "",
      emailState: "",
      phoneState: "",
      propertyTypeState: "",
      averagePriceState: "",
      locationState: "",
      businessNameState: ""
    };
  }
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col sm="5">
          <PictureUpload />
          <InputGroup
                className={classnames(this.state.firstnameState, {
                  "input-group-focus": this.state.firstnameFocus
                }, "mt-3")}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="nc-icon nc-single-02" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="firstname"
                  placeholder="First Name"
                  type="text"
                  onChange={e => this.change(e, "firstname", "length", 1)}
                  onFocus={e => this.setState({ firstnameFocus: true })}
                  onBlur={e => this.setState({ firstnameFocus: false })}
                />
                {this.state.firstnameState === "has-danger" ? (
                  <label className="error">This field is required.</label>
                ) : null}
              </InputGroup>
              <InputGroup
                className={classnames(this.state.lastnameState, {
                  "input-group-focus": this.state.lastnameFocus
                })}
              >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-circle-10" />
                </InputGroupText>
              </InputGroupAddon>

              <Input
                name="lastname"
                placeholder="Last Name"
                type="text"
                onChange={e => this.change(e, "lastname", "length", 1)}
                onFocus={e => this.setState({ lastnameFocus: true })}
                onBlur={e => this.setState({ lastnameFocus: false })}
              />
              {this.state.lastnameState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>

               <InputGroup
              className={classnames(this.state.emailState, {
                "input-group-focus": this.state.emailFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-circle-10" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="email"
                placeholder="Email"
                type="text"
                onChange={e => this.change(e, "email", "length", 1)}
                onFocus={e => this.setState({ emailFocus: true })}
                onBlur={e => this.setState({ emailFocus: false })}
              />
              {this.state.location === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
          </Col>
    
          <Col  sm="5">
            <InputGroup
              className={classnames(this.state.businessNameState, {
                "input-group-focus": this.state.businessNameFocus
              }, "mt-5")}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-circle-10" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="businessNamme"
                placeholder="Business Name"
                type="text"
                onChange={e => this.change(e, "businessName", "length", 1)}
                onFocus={e => this.setState({ businessNameFocus: true })}
                onBlur={e => this.setState({ businessNameFocus: false })}
              />
              {this.state.businessName === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
            <InputGroup
              className={classnames(this.state.phoneState, {
                "input-group-focus": this.state.phoneFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-circle-10" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="phone"
                placeholder="Phone Number"
                type="text"
                onChange={e => this.change(e, "phone", "length", 1)}
                onFocus={e => this.setState({ phoneFocus: true })}
                onBlur={e => this.setState({ phoneFocus: false })}
              />
              {this.state.phoneName === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>

            <InputGroup
              className={classnames(this.state.propertyTypeState, {
                "input-group-focus": this.state.propertyTypeFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-circle-10" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="propertyType"
                placeholder="Property Type"
                type="text"
                onChange={e => this.change(e, "propertyType", "length", 1)}
                onFocus={e => this.setState({ propertyTypeFocus: true })}
                onBlur={e => this.setState({ propertyTypeFocus: false })}
              />
              {this.state.propertyType === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>

            <InputGroup
              className={classnames(this.state.averagePriceState, {
                "input-group-focus": this.state.averagePriceFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-circle-10" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="averagePrice"
                placeholder="Average Price Point"
                type="text"
                onChange={e => this.change(e, "averagePrice", "length", 1)}
                onFocus={e => this.setState({ averagePriceFocus: true })}
                onBlur={e => this.setState({ averagePriceFocus: false })}
              />
              {this.state.averagePrice === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
            
            <InputGroup
              className={classnames(this.state.locationState, {
                "input-group-focus": this.state.locationFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-circle-10" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="location"
                placeholder="Location"
                type="text"
                onChange={e => this.change(e, "location", "length", 1)}
                onFocus={e => this.setState({ locationFocus: true })}
                onBlur={e => this.setState({ locationFocus: false })}
              />
              {this.state.location === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Wizard;
