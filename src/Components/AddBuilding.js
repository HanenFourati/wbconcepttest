import React from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {Form, Button} from "react-bootstrap";
import axios from "axios";


class AddBuilding extends React.Component {
  onAddBuilding = () => {
    axios
      .post(`/clients/${this.props.cltid}/buildings/`, this.state)
      .then(() => this.props.onAddBuildingReducerAction(this.state))
      .catch(err => alert(err));
  };
  onChange = e => {
    this.setState({
      client_Id: this.props.cltid,
      [e.target.name]: e.target.value
      
    });
  };
  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Client ID</Form.Label>
            <Form.Control name="client_Id"  value={this.props.cltid} disabled/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control name="address"  as="textarea" rows={3} onChange={this.onChange}  />
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control name="city" onChange={this.onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip code</Form.Label>
            <Form.Control name="zipcode" onChange={this.onChange} />
          </Form.Group>
          <Link to={`/clients/${this.props.cltid}/buildings/`}>
            <Button variant="muted" simple type="button" onClick={this.onAddBuilding} style={{border: "1px solid #d8c44d",color:"#d8c44d"}} >Add</Button>
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
    onAddBuildingReducerAction: building => {
      dispatch({
        type: "ADD_BUILDING",
        newBuilding: building
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(AddBuilding);
