import React from "react";
import './addProduct.scss';
import firebase from 'firebase';
import {
  Button,
  Card,

  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row
} from "reactstrap";


class addProduct extends React.Component {
  constructor(){
    super()

    this.state = {
      furniture: [],
      imageUrl: null,
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="addProduct">
        <Card className='add-card'>
          { this.state.imageUrl 
            ? <img src={this.state.imageUrl} alt='Uploaded image of product'/>
            : <div className='add-image'>
                <div className='plus-box'> 
                 
                 </div>
              </div>
          }
        </Card>

      </div>
    );
  }
}

export default addProduct;