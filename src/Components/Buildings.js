import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";


import BuildingItem from "../Components/BuildingItem";
import CustomizedCard from "../Components/CustomizedCard";
import AddBuilding from "../Components/AddBuilding";
import CustomizedModal from '../Components/CustomizedModal';

class Buildings extends Component {

  componentDidMount() {
    axios
    .get(`/clients/${this.props.id}/buildings`)
    .then(res => 
      this.props.initBuildingsList(res.data));
  }

  render() {
    return (
      <div style={{padding: "15px"}}>
      <div style={{padding: "15px"}}>
        <CustomizedCard title="Buildings List" subtitle="Here is the client buildings"
          text={
            <div>
              <Table className="CustomizedTable" responsive hover >
                <thead className="table-dark">
                  <tr>
                    <th>Client ID</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip code</th>
                    <th>Equipements</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.BuildingsList.map((e, i) => ( 
                    <tr>
                    <BuildingItem cltid={this.props.id} key={i} building={e} />
                    </tr>
                  ))}
                </tbody> 
              </Table>
              <div>
                <CustomizedModal styling={true} title="Add a new building" text="Add Building" body={<AddBuilding cltid={this.props.id}/>} />
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
    BuildingsList: state.BuildingsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initBuildingsList: buildings => {
      dispatch({
        type: "UPDATE_BUILDINGS_LIST",
        buildings
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buildings);