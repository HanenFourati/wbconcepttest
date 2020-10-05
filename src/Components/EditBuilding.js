import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {Form, Button} from "react-bootstrap";
import axios from "axios";



class EditBuilding extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      city: "",
      zipcode: ""
    };
  }

  onEditBuilding = () => {
    axios
      .put(`/clients/${this.props.cltid}/buildings/edit-building/${this.state._id}`, {
        client_Id: this.props.cltid,
        address: this.state.address,
        city: this.state.city,
        zipcode: this.state.zipcode
      })
      .then(() => this.props.onEditBuildingReducerAction(this.state))
      .catch(err => alert(err));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.setState({
      ...this.props.BuildingsList.filter(e => e._id === this.props._id)[0]
    });
  }
  render() {
    console.log(this.state);

    return ( 
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Client ID</Form.Label>
            <Form.Control name="client_Id"  value={this.props.cltid} disabled/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" row={3} name="address" onChange={this.onChange} value={this.state.address} />
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control name="city" onChange={this.onChange} value={this.state.city}  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip code</Form.Label>
            <Form.Control name="zipcode" onChange={this.onChange} value={this.state.zipcode}/>
          </Form.Group>
          <Link to={`/clients/${this.props.cltid}/buildings/`}>
           <Button onClick={this.onEditBuilding} variant="muted" simple type="button" style={{border: "1px solid #d8c44d",color:"#d8c44d"}}>Edit</Button>
          </Link>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    BuildingsList: state.BuildingsReducer
  };
};

const mapDispacthToProps = dispatch => {
  return {
    onEditBuildingReducerAction: building => {
      dispatch({
        type: "EDIT_BUILDING",
        editedBuilding: building
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(EditBuilding);
