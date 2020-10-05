import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";


import EquipementItem from "./EquipementItem";
import CustomizedCard from "./CustomizedCard";
import AddEquipement from "./AddEquipement";
import CustomizedModal from './CustomizedModal';


class Equipements extends Component {

  componentDidMount() {
    axios
    .get(`/clients/${this.props.cltid}/buildings/${this.props.bldid}/equipements`)
    .then(res => 
      this.props.initEquipementsList(res.data));
   }

  render() {
    return (
      <div style={{padding: "15px"}}>
      <div style={{padding: "15px"}}>
        <CustomizedCard title="Equipement List" subtitle="Here is the building equipements"
          text={
            <div>
              <Table className="CustomizedTable" responsive hover >
                <thead className="table-dark">
                  <tr>
                    <th>Building ID</th>
                    <th>Reference</th>
                    <th>Installation Date</th>
                    <th>Type</th>
                    <th>Prestations</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.EquipementsList.map((e, i) => ( 
                    <tr>
                    <EquipementItem cltid={this.props.cltid} bldid={this.props.bldid} key={i} equipement={e} />
                    </tr>
                  ))}
                </tbody> 
              </Table>
              <div>
                <CustomizedModal styling={true} title="Add a new equipement" text="Add Equipement" body={<AddEquipement bldid={this.props.bldid} cltid={this.props.cltid}/>} />
              </div>
            </div>
          }
          />
     </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    EquipementsList: state.EquipementsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initEquipementsList: equipements => {
      dispatch({
        type: "UPDATE_EQUIPEMENTS_LIST",
        equipements
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Equipements);