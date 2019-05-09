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

  change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  };
  // isValidated = () => {
  //   if (
  //     this.state.firstnameState === "has-success" &&
  //     this.state.lastnameState === "has-success" &&
  //     this.state.businessNameState === "has-success" &&
  //     this.state.urlState === "has-success" &&
  //     this.state.locationState === "has-success" && 
  //     this.state.phoneState === "has-success"
  //   ) {
  //     return true;
  //   } else {
  //     if (this.state.firstnameState !== "has-success") {
  //       this.setState({ firstnameState: "has-danger" });
  //     }
  //     if (this.state.lastnameState !== "has-success") {
  //       this.setState({ lastnameState: "has-danger" });
  //     }
  //     if (this.state.emailState !== "has-success") {
  //       this.setState({ emailState: "has-danger" });
  //     }
  //     return false;
  //   }
  // };
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
                  onChange={e => this.change(e, "firstname")}
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
                onChange={e => this.change(e, "lastname")}
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
                onChange={e => this.change(e, "email",)}
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
                onChange={e => this.change(e, "businessName")}
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
                onChange={e => this.change(e, "phone")}
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
                onChange={e => this.change(e, "propertyType")}
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
                onChange={e => this.change(e, "averagePrice")}
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
                onChange={e => this.change(e, "location")}
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
