import React, { Component } from 'react';
import firebase from 'firebase';
import {Link} from 'react-router-dom';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Register extends React.Component {
  constructor(){
    super()
    
    this.state={
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      error: false
    }

    this.loginUser = this.loginUser.bind(this)
    this.handleText = this.handleText.bind(this)
  }

  loginUser() {
    const email = this.state.email
    const pass = this.state.password
    const auth = firebase.auth();
    const db = firebase.firestore()

    const {history} = this.props
    auth.createUserWithEmailAndPassword(email, pass).then((response)=>{
      console.log(response)
      db.collection('users').doc(response.user.uid).set({
        user_id: response.user.uid,
        email: response.user.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname
      }).then(function(docRef) {
          history.push('/buildprofile')
      }).catch(function(error) {
          console.error("Error adding document: ", error);
      });

    }).catch(function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage,'failed sooner than i thought')
    })
  }

  handleText(event){
    event.preventDefault()
    this.setState({
        [event.target.id]: event.target.value
    })
  }

  componentDidMount() {
    document.body.classList.toggle("register-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
  }
  render() {
    return (
      <div className="register-page">
        <Container>
          <Row>
            <Col className="ml-auto" lg="5" md="5">
              <div className="info-area info-horizontal mt-5">
                <div className="icon icon-primary">
                  <i className="nc-icon nc-tv-2" />
                </div>
                <div className="description">
                  <h5 className="info-title">Streamlined Communication</h5>
                  <p className="description">
                    We've created the marketing campaign of the website. It was
                    a very interesting collaboration.
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-primary">
                  <i className="nc-icon nc-html5" />
                </div>
                <div className="description">
                  <h5 className="info-title">Inventory & Metrics</h5>
                  <p className="description">
                    We've developed the website with HTML5 and CSS3. The client
                    has access to the code using GitHub.
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-info">
                  <i className="nc-icon nc-atom" />
                </div>
                <div className="description">
                  <h5 className="info-title">Photo Assets</h5>
                  <p className="description">
                    There is also a Fully Customizable CMS Admin Dashboard for
                    this product.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="mr-auto" lg="4" md="6">
              <Card className="card-signup text-center">
                <CardHeader>
                  <CardTitle tag="h4">Sign Up</CardTitle>
                  <div className="social">
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fa fa-google" />
                    </Button>
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fa fa-facebook-f" />
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form action="" className="form" method="">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="First Name..." type="text" id='firstname' onChange={this.handleText} />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-circle-10" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Last Name..." type="text" id='lastname' onChange={this.handleText} />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email..." type="email" id='email' onChange={this.handleText} />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-touch-id" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="passsword..." type="password" id='password' onChange={this.handleText} />
                    </InputGroup>
                    <FormGroup check className="text-left">
                      <Label check>
                        <Input defaultChecked type="checkbox" />
                        <span className="form-check-sign" />
                        I agree to the{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          terms and conditions
                        </a>
                        .
                      </Label>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={this.loginUser}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/dinnertable.jpg")})`
          }}
        />
      </div>
    );
  }
}

export default Register;
