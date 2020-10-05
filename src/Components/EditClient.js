import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {Form, Button} from "react-bootstrap";
import axios from "axios";



class EditClient extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      socialreason: "",
      mobilenumber: "",
      emailaddress: ""
    };
  }

  onEditClient = () => {
    axios
      .put(`/clients/${this.state._id}`, {
        socialreason: this.state.socialreason,
        mobilenumber: this.state.mobilenumber,
        emailaddress: this.state.emailaddress
      })
      .then(() => this.props.onEditClientReducerAction(this.state))
      .catch(err => alert(err));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.setState({
      ...this.props.ClientsList.filter(e => e.socialreason === this.props.socialreason)[0]
    });
  }
  render() {
    console.log(this.state);

    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Social reason</Form.Label>
            <Form.Control name="socialreason" onChange={this.onChange} value={this.state.socialreason}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile number</Form.Label>
            <Form.Control name="mobilenumber" onChange={this.onChange} value={this.state.mobilenumber}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>E-mail address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name="emailaddress" onChange={this.onChange} value={this.state.emailaddress}/>
          </Form.Group>
          <Link to='/clients'>
            <Button variant="muted" simple type="button" style={{border: "1px solid #d8c44d",color:"#d8c44d"}} onClick={this.onEditClient}>Edit</Button>
          </Link>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ClientsList: state.ClientsReducer
  };
};

const mapDispacthToProps = dispatch => {
  return {
    onEditClientReducerAction: client => {
      dispatch({
        type: "EDIT_CLIENT",
        editedClient: client
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(EditClient);
