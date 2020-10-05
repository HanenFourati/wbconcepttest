import React from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {Form, Button} from "react-bootstrap";
import axios from "axios";


class AddEquipement extends React.Component {
  onAddEquipement = () => {
    axios
      .post(`/clients/${this.props.cltid}/buildings/${this.props.bldid}/equipements/add-equipement`, this.state)
      .then(() => this.props.onAddEquipementReducerAction(this.state))
      .catch(err => alert(err));
  };
  onChange = e => {
    this.setState({
      building_Id: this.props.bldid,
      [e.target.name]: e.target.value
      
    });
  };
  render() {
    console.log(this.state)
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Building ID</Form.Label>
            <Form.Control name="building_Id"  value={this.props.bldid} disabled/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Reference</Form.Label>
            <Form.Control name="reference" onChange={this.onChange}  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Installation date</Form.Label>
            <Form.Control type="date" name="installation_Date" onChange={this.onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" name="type" onChange={this.onChange}>
              <option>Select equipment type</option>
              <option>Elevator</option>
              <option>Automatic door</option>
            </Form.Control>
          </Form.Group>
          <Link to={`/clients/${this.props.cltid}/buildings/${this.props.bldid}/equipements`}>
            <Button variant="muted" simple type="button" style={{border: "1px solid #d8c44d",color:"#d8c44d"}} onClick={this.onAddEquipement}>Add</Button>
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
    onAddEquipementReducerAction: equipement => {
      dispatch({
        type: "ADD_EQUIPEMENT",
        newEquipement: equipement
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(AddEquipement);
