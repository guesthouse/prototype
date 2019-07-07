import React from "react";
import './Product.scss';
import firebase from 'firebase';
import AddProduct from './../../partials/addProduct/addProduct.jsx';
import {
  Button,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row
} from "reactstrap";


class Product extends React.Component {
  constructor(){
    super()

    this.state = {
      products: [],
      user: {},
      moduleVisibility: 'showBase' 
    }

    this.toggleVisbility = this.toggleVisbility.bind(this)
  }

  toggleVisbility = () => {
    this.state.moduleVisibility === 'showBase' 
    ? this.setState({
        moduleVisibility: 'hideBase'
      })
    : this.setState({
      moduleVisibility: 'showBase'
    })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.firestore();
        const productList = []
        db.collection('products').get().then( snap => {
          snap.forEach((doc)=>{
            let product = {id: doc.id, data: doc.data()}
            productList.push(product);
          });

          this.setState({
            products: productList
          });
        });

        // let accountRef = db.collection('users').doc(user.email)
        // accountRef.get().then( doc => {
        //   let account = doc.data()
        //   User is signed in.
        //  set state with user
        // });
      } else {
        // No user is signed in. redirect to login or register
      }
    });
  }
  render() {
    return (
      <div className="furniture">
        {this.state.moduleVisibility == 'showBase' 
          ? <div>
            <Col lg="3" md="3" sm={{size: "3", offset: 9}}>
              <UncontrolledDropdown>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  className="btn-round btn-block"
                  color="primary"
                  data-toggle="dropdown"
                  id="dropdownMenuButton"
                  type="button"
                >
                  Manage Furniture
                </DropdownToggle>
                <DropdownMenu
                  aria-labelledby="dropdownMenuButton"
                  right
                >
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Product Overview
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={this.toggleVisbility}
                  >
                    Add Product
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>

            <div>
              { this.state.products.length === 0 
                ? <Col lg="6" md="6" sm={{size: "6", offset: 3}}>
                    <h3 className='zero'>
                      You Currently Do Not Have Any Furniture
                    </h3>
                    <Col sm={{size: "6", offset: 4}}>
                      <Button className="btn-round" sm={{size: "6", offset: 4}}color="primary" onClick={this.toggleVisbility}>
                          + Add Furniture
                      </Button>
                    </Col>
                  </Col>
                : <div className='flex-row'>
                    {(this.state.products).map((e,i)=>{
                      return (
                        <div key={i}>
                          <Card className="card-user-flex" md='4' >
                            <div className="product-image">
                              <img
                                alt="..."
                                src={e.data.imageURL}
                              />
                            </div>
                          </Card>
                        
                          <a href="/product/detail" onClick={e => e.preventDefault()}>
                            <Row>
                              <Col className="ml-auto">
                                <h5>
                                  {e.data.title}
                                </h5>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="mr-auto" >
                                <h5 className={this.state.statusColor}>
                                  {e.data.status}
                                </h5>
                              </Col>
                            </Row>
                          </a>
                        </div>
                      )
                    })}
                  </div>
                }
              </div>
            </div>
          : <AddProduct user={this.state.user} closeModal={this.toggleVisbility}>        
            </AddProduct>
        }
      </div>
    );
  }
}

export default Product;