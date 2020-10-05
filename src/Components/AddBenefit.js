import React from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {Form, Button} from "react-bootstrap";
import axios from "axios";

const EAnomalyList = ["Elevator shaft anomaly",
                     "Control unit anomaly",
                     "Counterweight anomaly",
                     "Machine drive anomaly",
                     "Counterweight anomaly",
                     "Guide rail anomaly",
                     "Counterweight frame anomaly",
                     "Counterweight buffer anomaly",
                     "Overspeed governor anomaly",
                     "Control cabinet anomaly",
                     "Apron anomaly",
                     "Landing doors anomaly",
                     "Tension pulley anomaly",
                     "Brushless motor anomaly",
                     "Automatic door track anomaly",
                     "The door hanger anomaly",
                     "Synchronous belt anomaly",
                     "Motor anomaly",
                     "Sensor anomaly"];

class AddBenefit extends React.Component {
  onAddBenefit = () => {
    axios
      .post(`/clients/${this.props.cltid}/buildings/${this.props.bldid}/equipements/${this.props.eqpid}/add-benefits`, this.state)
      .then(() => this.props.onAddBenefitReducerAction(this.state))
      .catch(err => alert(err));
  };
  onChange = e => {
    this.setState({
      equipement_Id: this.props.eqpid,
      [e.target.name]: e.target.value
      
    });
  };
  render() {
    console.log(this.state)
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Equipement ID</Form.Label>
            <Form.Control name="building_Id"  value={this.props.eqpid} disabled/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="Date" onChange={this.onChange}  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" name="type" onChange={this.onChange} >
              <option>Select benefit type</option>
              <option>Audit</option>
              <option>Technical Control</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Anomalies</Form.Label>
            <Form.Control as="select" name="anomalies" onChange={this.onChange} multiple>
              {EAnomalyList.map((prop, key) => {
                return <option key={key}>{prop}</option>;
               })}
            </Form.Control>
            </Form.Group>
          <Link to={`/clients/${this.props.cltid}/buildings/${this.props.bldid}/equipements`}>
            <Button variant="muted" simple type="button" onClick={this.onAddBenefit} style={{border: "1px solid #d8c44d",color:"#d8c44d"}}>Add</Button>
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
    onAddBenefitReducerAction: benefit => {
      dispatch({
        type: "ADD_BENEFIT",
        newBenefit: benefit
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(AddBenefit);
