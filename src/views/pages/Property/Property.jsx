import React from "react";
import './Property.scss';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Input,
  Container,
  Col
} from "reactstrap";


class Property extends React.Component {
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

export default Property;
