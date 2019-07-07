import React from "react";
import './ProductDetail.scss';
import firebase from 'firebase/app';
import 'firebase/firestore';
import FileUploader from 'react-firebase-file-uploader/lib/CustomUploadButton';
import EditProduct from './../../partials/editProduct/editProduct.jsx';
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Col, 
  Row
} from "reactstrap";


class addProduct extends React.Component {
  constructor(){
    super()

    this.state = {
      moduleVisibility: 'showBase', 

      user : {role: 'super'},
      imageURL: null,
      title: '',
      price: '',
      allTypes: [],
      productType: 'Select Type', 
      allMakers: [],
      selectedMaker: 'Select Maker',
      makerID: '',
      makerName: '',
      status: 'staged',
      allProperties: [],
      propertyID: '',
      propertyName: '',
      installDate: '',
      notes: ''
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
    let productList = []
    let userList = []
    console.log(this.props)
    const db = firebase.firestore();
    db.collection('products').doc('8Lb624NAbtnwPEbUkyxc').get().then( doc => {
      let data = doc.data();
      this.setState({
        title: data.title,
        price: data.price,
        productType: data.productType,
        makerName: data.makerName,
        makerID: data.makerID,
        propertyName: data.propertyName,
        propertyID: data.propertyID,
        installDate: data.installDate,
        notes: data.notes,
        imageURL: data.imageURL,
        archived: data.archived
      });
    });
  }

  render() {
    return (
      <div className="productDetail">
        {this.state.moduleVisibility == 'showBase' 
          ? <div>
            <Card className='add-card top'>
              <div className="image-container">
                <img src={this.state.imageURL} alt='maker uploaded product' className="product"/>
              </div>
            
            <CardBody>
              <Form>
                <Row>
                  <Col md="8">
                    <h5>{this.state.title}</h5>
                  </Col>
                </Row>

                <Row md="12">
                   <Col md="4" >
                    <FormGroup className="add-dropdown">
                      <label>Maker's Name</label>
                      <h6>{this.state.makerName}</h6>
                    </FormGroup>
                  </Col>
    

                  <Col md="4">
                    <FormGroup className="add-dropdown">
                      <label>Product Type</label>
                      <h6>{this.state.productType}</h6>
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="add-dropdown">
                      <label>Staging Status</label>
                      <h6>{this.state.status}</h6>
                    </FormGroup>
                  </Col>
                </Row>

                { this.state.status === 'staged' || this.state.status === 'planned'
                  ? <Row md="12">
                    <Col md="4" >
                      <FormGroup className="add-dropdown">
                        <label>Staging Location</label>
                        <h6>{this.state.propertyName}</h6>
                      </FormGroup>
                    </Col>

                    <Col md="4" >
                      <FormGroup className="add-dropdown">
                        <label>Install Date</label>
                        <h6>{this.state.installDate}</h6>
                      </FormGroup>
                    </Col>
                  </Row>
                  : null 
                }

                <Row md="12">
                  <Col md="4">
                    <FormGroup>
                      <label>Price</label>
                      <h6>${this.state.price}</h6>
                    </FormGroup>
                  </Col>
                </Row>
                
                { this.state.user.role === 'super'
                  ? <Row>
                    <Col  md="12">
                      <FormGroup>
                        <label>Notes</label>
                        <p>{this.state.notes}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  : null
                }

                <Row>
                  <Button className='btn-center' onClick={this.toggleVisbility}>Edit Product</Button>
                </Row>

              </Form>
            </CardBody>
          </Card>
        </div>
        : <EditProduct product={this.state}></EditProduct>
        }
      </div>
    );
  }
}

export default addProduct;