import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Tooltip, OverlayTrigger,Button } from "react-bootstrap";


import EditEquipement from "../Components/EditEquipement";
import CustomizedModal from '../Components/CustomizedModal';
import BenefitHistory from "./BenefitHistory";
import AddBenefit from "./AddBenefit";

class EquipementItem extends React.Component {

  onRemoveEquipement = () => {
    axios
      .delete(`/clients/${this.props.cltid}/buildings/${this.props.bldid}/equipements/${this.props.equipement._id}`)
      .then(() =>
        this.props.onRemoveEquipementReducerAction(this.props.equipement._id)
      )
      .catch(err => alert(err));
  };

  render() {
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    const edit = <Tooltip id="remove_tooltip">Edit</Tooltip>;
    return (
      <>
        <td>{this.props.equipement.building_Id}</td>
        <td>{this.props.equipement.reference}</td>
        <td>{this.props.equipement.installation_Date}</td>
        <td>{this.props.equipement.type}</td>
        <td>
          <CustomizedModal 
           styling={true}
           title="Benefits Histroy"
           text="H"
           body={<BenefitHistory cltid={this.props.cltid} bldid={this.props.bldid} eqpid={this.props.equipement._id}/>}
          />
          &nbsp;
          <CustomizedModal 
           styling={true}
           title="Add a new benefit"
           text="+"
           body={<AddBenefit cltid={this.props.cltid} bldid={this.props.bldid} eqpid={this.props.equipement._id}/>}
          />
        </td>
        <td>
          <CustomizedModal 
          styling={false}
          title="Edit equipement informations"
          text={
            <OverlayTrigger placement="top" overlay={edit}>
                <Button variant="muted" simple type="button" bsSize="xs">
                  <i className="fa fa-edit" style={{color:"#d8c44d"}} />
                </Button>
            </OverlayTrigger>
          }
          body={<EditEquipement  cltid={this.props.cltid} bldid={this.props.bldid} _id={this.props.equipement._id}/>} />
          &nbsp;
          <OverlayTrigger placement="top" overlay={remove}>
              <Button variant="muted" simple type="button" bsSize="xs" onClick={this.onRemoveEquipement}>
                <i className="fa fa-times" style={{color:"#d8c44d"}} />
              </Button>
          </OverlayTrigger>
        </td>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveEquipementReducerAction: id => {
      dispatch({
        type: "REMOVE_EQUIPEMENT",
        id
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipementItem);
