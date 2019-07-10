import React from "react";
import firebase from 'firebase';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";

class Login extends React.Component {
  constructor(){
    super()

    this.state = {
      email: '',
      password: ''
    }
    this.change = this.change.bind(this);
  }

  change = (event, stateName) => {
    this.setState({ [stateName]: event.target.value });
  };

  loginUser = () => {
    const email = this.state.email
    const pass = this.state.password
    const auth = firebase.auth();

    const {history} = this.props
    auth.signInWithEmailAndPassword(email, pass).then(()=>{
      history.push('/admin/property')
    })
    .catch(
      console.log('unable to login')
    );
}

  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  render() {
    return (
      <div className="login-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form action="" className="form" method="">
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                      <h3 className="header text-center">Login</h3>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                        placeholder="Email" 
                        type="text" 
                        onChange={e => this.change(e, "email")}/>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        onChange={e => this.change(e, "password")}
                      />
                    </InputGroup>                    
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="btn-round mb-3"
                      color="warning"
                      href="#pablo"
                      onClick={e => this.loginUser()}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            // backgroundImage: `url(${require("")})`
          }}
        />
      </div>
    );
  }
}

export default Login;
