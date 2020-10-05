import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Tooltip, OverlayTrigger,Button } from "react-bootstrap";


import EditBuilding from "../Components/EditBuilding";
import CustomizedModal from '../Components/CustomizedModal';

class BuildingItem extends React.Component {

  onRemoveBuilding = () => {
    axios
      .delete(`/clients/${this.props.cltid}/buildings/${this.props.building._id}`)
      .then(() =>
        this.props.onRemoveBuildingReducerAction(this.props.building._id)
      )
      .catch(err => alert(err));
  };

  render() {
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    const edit = <Tooltip id="remove_tooltip">Edit</Tooltip>;
    return (
      <>
        <td>{this.props.building.client_Id}</td>
        <td>{this.props.building.address}</td>
        <td>{this.props.building.city}</td>
        <td>{this.props.building.zipcode}</td>
        <td>
          <Link to={`/clients/${this.props.building.client_Id}/buildings/${this.props.building._id}/equipements`} style={{textDecoration: "none", color:"#d8c44d"}}>
            Equipements  <i class="fa fa-link" />
          </Link>
        </td>
        <td>
          <CustomizedModal 
          styling={false}
          title="Edit building informations"
          text={
            <OverlayTrigger placement="top" overlay={edit}>
                <Button variant="muted" simple type="button" bsSize="xs">
                  <i className="fa fa-edit" style={{color:"#d8c44d"}}/>
                </Button>
            </OverlayTrigger>
          }
          body={<EditBuilding  cltid={this.props.cltid} _id={this.props.building._id}/>} />
          &nbsp;
          <OverlayTrigger placement="top" overlay={remove}>
              <Button variant="muted" simple type="button" bsSize="xs" onClick={this.onRemoveBuilding}>
                <i className="fa fa-times" style={{color:"#d8c44d"}}/>
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
    onRemoveBuildingReducerAction: id => {
      dispatch({
        type: "REMOVE_BUILDING",
        id
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildingItem);
