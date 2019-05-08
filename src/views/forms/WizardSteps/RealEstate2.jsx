import React from "react";
import classnames from "classnames";
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
} from "reactstrap";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleBed = this.toggleBed.bind(this);
    this.toggleBath = this.toggleBath.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.setBeds = this.setBeds.bind(this);
    this.setBaths = this.setBaths.bind(this);

    this.state = {
      dropdownOpen: false,
      bedDropdownOpen: false,
      bathDropDownOpen: false,
      address: "",
      typeOfProperty: "Select Property Type",
      listingPrice: "",
      description: "",
      url: "",
      bedNumber: "Number of Bedrooms",
      bathNumber: "Number of Bathrooms",
      dateTimeForStage: "",

      addressState: "",
      typeOfPropertyState: "",
      listingPriceState: "",
      descriptionState: "",
      bedNumberState: "",
      bathNumberState: "",
      dateTimeForStageState: "",
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  toggleBed() {
    this.setState(prevState => ({
      bedDropdownOpen: !prevState.bedDropdownOpen,
    }));
  }
  toggleBath() {
    this.setState(prevState => ({
      bathDropdownOpen: !prevState.bathDropdownOpen,
    }));
  }


  setProperty(e){
    let type =  e.currentTarget.textContent;
    this.setState({
      typeOfProperty: type
    })
  }

  setBeds(e){
    let type =  e.currentTarget.textContent;
    this.setState({
      bedNumber: type
    })
  }

  setBaths(e){
    let type =  e.currentTarget.textContent;
    this.setState({
      bathNumber: type
    })
  }

  render() {
    return (
      <>
        <h5 className="info-text">Staging Request</h5>
        <Row className="justify-content-center">
          <Col sm="5">
            <InputGroup
              className={classnames(this.state.addressState, {
                "input-group-focus": this.state.firstnameFocus
              },  "mt-2")}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <i className="nc-icon nc-single-02" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                  name="address"
                  placeholder="Property Address"
                  type="text"
                  onChange={e => this.change(e, "address", "length", 1)}
                  onFocus={e => this.setState({ addressFocus: true })}
                  onBlur={e => this.setState({ addressFocus: false })}
              />
              {this.state.addressState === "has-danger" ? (
                  <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>

              <InputGroup
              className={classnames(this.state.urlState, {
                "input-group-focus": this.state.urlFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-circle-10" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="url"
                placeholder="Listing/Property URL"
                type="text"
                onChange={e => this.change(e, "url", "length", 1)}
                onFocus={e => this.setState({ urlFocus: true })}
                onBlur={e => this.setState({ urlFocus: false })}
              />
              {this.state.url === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>

            <InputGroup
              className={classnames(this.state.descriptionState, {
                "input-group-focus": this.state.descriptionFocus
              }, )}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-single-02" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="description"
                placeholder="Describe the home & finishes"
                type="textarea"
                onChange={e => this.change(e, "description", "length", 1)}
                onFocus={e => this.setState({ descriptionFocus: true })}
                onBlur={e => this.setState({ descriptionFocus: false })}
              />
              {this.state.descriptionState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>

            <InputGroup
              className={classnames(this.state. dateTimeForStageState, {
                "input-group-focus": this.state. dateTimeForStageFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-circle-10" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name=" dateTimeForStage"
                placeholder=" Date/Time of Staging)"
                type="text"
                onChange={e => this.change(e, " dateTimeForStage", "length", 1)}
                onFocus={e => this.setState({  dateTimeForStageFocus: true })}
                onBlur={e => this.setState({  dateTimeForStageFocus: false })}
              />
              {this.state. dateTimeForStage === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
          </Col>
    
          <Col  sm="5">
            <InputGroup
              className={classnames(this.state.typeOfPropertyState, {
                "input-group-focus": this.state.typeOfPropertyFocus
              })}
            >
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="md">
                <DropdownToggle caret>
                  {this.state.typeOfProperty}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.setProperty}>Single Family</DropdownItem>
                  <DropdownItem onClick={this.setProperty}>Multi-Family</DropdownItem>
                  <DropdownItem onClick={this.setProperty}>Condo</DropdownItem>
                  <DropdownItem onClick={this.setProperty}>Multi-Family</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {this.state.typeOfPropertyState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>

             <InputGroup
              className={classnames(this.state.bedNumberState, {
                "input-group-focus": this.state.bedNumberFocus
              })}
            >
              <Dropdown isOpen={this.state.bedDropdownOpen} toggle={this.toggleBed} size="md">
                <DropdownToggle caret>
                  {this.state.bedNumber}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.setBeds}>1 Bedrooms</DropdownItem>
                  <DropdownItem onClick={this.setBeds}>2 Bedrooms</DropdownItem>
                  <DropdownItem onClick={this.setBeds}>3 Bedrooms</DropdownItem>
                  <DropdownItem onClick={this.setBeds}>4 Bedrooms</DropdownItem>
                  <DropdownItem onClick={this.setBeds}>5 Bedrooms</DropdownItem>
                  <DropdownItem onClick={this.setBeds}>6 Bedrooms</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </InputGroup>

            <InputGroup
              className={classnames(this.state.bathNumberState, {
                "input-group-focus": this.state.bathNumberFocus
              })}
            >
              <Dropdown isOpen={this.state.bathDropdownOpen} toggle={this.toggleBath} size="md">
                <DropdownToggle caret>
                  {this.state.bathNumber}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.setBaths}>1 Bathrooms</DropdownItem>
                  <DropdownItem onClick={this.setBaths}>2 Bathrooms</DropdownItem>
                  <DropdownItem onClick={this.setBaths}>3 Bathrooms</DropdownItem>
                  <DropdownItem onClick={this.setBaths}>4 Bathrooms</DropdownItem>
                  <DropdownItem onClick={this.setBaths}>5 Bathrooms</DropdownItem>
                  <DropdownItem onClick={this.setBaths}>6 Bathrooms</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </InputGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Wizard;
