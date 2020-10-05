import React from "react";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {Form, Button} from "react-bootstrap";
import axios from "axios";



class AddClient extends React.Component {
  onAddClient = () => {
    axios 
      .post("/clients", this.state)
      .then(() => this.props.onAddClientReducerAction(this.state))
      .catch(err => alert(err));
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Social reason</Form.Label>
            <Form.Control name="socialreason" onChange={this.onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile number</Form.Label>
            <Form.Control name="mobilenumber" onChange={this.onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>E-mail address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name="emailaddress" onChange={this.onChange} />
          </Form.Group>
          <Link to='/clients'>
            <Button variant="muted" simple type="button" onClick={this.onAddClient} style={{border: "1px solid #d8c44d",color:"#d8c44d"}}>Add</Button>
          </Link>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispacthToProps = dispatch => {
  return {
    onAddClientReducerAction: client => {
      dispatch({
        type: "ADD_CLIENT",
        newClient: client
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(AddClient);
