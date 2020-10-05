import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {Form, Button} from "react-bootstrap";
import axios from "axios";



class EditEquipement extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      reference: "",
      installation_Date: "",
      type: ""
    };
  }

  onEditEquipement = () => { 
    axios
      .put(`/clients/${this.props.cltid}/buildings/${this.props.bldid}/equipements/edit-equipement/${this.state._id}`, {
        building_Id: this.props.bldid,
        reference: this.state.reference,
        installation_Date: this.state.installation_Date,
        type: this.state.type
      })
      .then(() => this.props.onEditEquipementReducerAction(this.state))
      .catch(err => alert(err));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.setState({
      ...this.props.EquipementsList.filter(e => e._id === this.props._id)[0]
    });
  }
  render() {
    return ( 
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Building ID</Form.Label>
            <Form.Control name="building_Id"  value={this.props.bldid} disabled/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Reference</Form.Label>
            <Form.Control name="reference" onChange={this.onChange} value={this.state.reference} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Installation date</Form.Label>
            <Form.Control type="date" name="installation_Date" onChange={this.onChange} value={this.state.installation_Date}  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" name="type" onChange={this.onChange} value={this.state.type}>
              <option>Select equipment type</option>
              <option>Elevator</option>
              <option>Automatic door</option>
            </Form.Control>
          </Form.Group>
          <Link to={`/clients/${this.props.cltid}/buildings/${this.props.bldid}/equipements`}>
           <Button variant="muted" simple type="button" style={{border: "1px solid #d8c44d",color:"#d8c44d"}}  onClick={this.onEditEquipement}>Edit</Button>
          </Link>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    EquipementsList: state.EquipementsReducer
  };
};

const mapDispacthToProps = dispatch => {
  return {
    onEditEquipementReducerAction: equipement => {
      dispatch({
        type: "EDIT_EQUIPEMENT",
        editedEquipement: equipement
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(EditEquipement);
