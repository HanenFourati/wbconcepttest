import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Tooltip, OverlayTrigger,Button } from "react-bootstrap";
import axios from "axios";

import CustomizedModal from "../Components/CustomizedModal";
import EditClient from "../Components/EditClient";

class ClientItem extends React.Component {

  onRemoveClient = () => {
    axios
      .delete(`/clients/${this.props.client._id}`)
      .then(() =>
        this.props.onRemoveClientReducerAction(this.props.client._id)
      )
      .catch(err => alert(err));
  };
  
  render() {
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    const edit = <Tooltip id="remove_tooltip">Edit</Tooltip>;
    return (
      <>
        <td>{this.props.client.socialreason}</td>
        <td>{this.props.client.mobilenumber}</td>
        <td>{this.props.client.emailaddress}</td>
        <td>
          <Link to={`/clients/${this.props.client._id}/buildings`} style={{textDecoration: "none", color: "#d8c44d"}}>
            Buildings  <i class="fa fa-link"/>
          </Link>
        </td>
        <td>
          <CustomizedModal 
          styling={false}
          title="Edit client informations"
          text={
            <OverlayTrigger placement="top" overlay={edit}>
                <Button variant="muted" simple type="button" bsSize="xs">
                  <i className="fa fa-edit" style={{color:"#d8c44d"}}/>
                </Button>
            </OverlayTrigger>
          }
          body={<EditClient  socialreason={this.props.client.socialreason} />} />
          &nbsp;
          <OverlayTrigger placement="top" overlay={remove}>
              <Button variant="muted" simple type="button" bsSize="xs" onClick={this.onRemoveClient}>
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
    onRemoveClientReducerAction: id => {
      dispatch({
        type: "REMOVE_CLIENT",
        id
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientItem);
