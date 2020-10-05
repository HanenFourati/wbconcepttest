import React from "react";
import { Route } from "react-router-dom";

import Home from "../Views/Home";
import ClientsList from "../Views/ClientsList";
import Buildings from "../Components/Buildings";
import Equipements from "../Components/Equipements";
import AddClient from "../Components/AddClient";
import EditClient from "../Components/EditClient";
import AddBuilding from "../Components/AddBuilding";
import EditBuilding from "../Components/EditBuilding";
import AddEquipement from "../Components/AddEquipement";
import EditEquipement from "../Components/EditEquipement";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/clients" render={() => <ClientsList />} />
        <Route exact path="/clients/:id/buildings" render={props => (
            <Buildings id={props.match.params.id}/>
              )}/>
        <Route exact path="/clients/:cltid/buildings/:bldid/equipements" render={props => (
            <Equipements cltid={props.match.params.cltid} bldid={props.match.params.bldid}/>
              )}/>
        <Route
          exact
          path="/edit-page/:socialreason"
          render={props => <EditClient socialreason={props.match.params.socialreason} />}
        />
        <Route
          exact
          path="/clients/:id/buildings/edit-building/:_id"
          render={props => <EditBuilding _id={props.match.params._id} cltid={props.match.params.id}/>}
        />
        <Route
          exact
          path="/clients/:cltid/buildings/:bldid/equipements/edit-equipement/:_id"
          render={props => <EditEquipement _id={props.match.params._id} bldid={props.match.params.bldid} cltid={props.match.params.cltid}/>}
        />
        <Route exact path="/add-client" component={AddClient} />
        <Route
          path="/clients/:id/buildings/add-building"
          render={props => <AddBuilding cltid={props.match.params.id}/>}
        />
        <Route
          path="/clients/:cltid/buildings/:bldid/equipements/add-equipement"
          render={props => <AddEquipement ltid={props.match.params.cltid} bldid={props.match.params.bldid}/>}
        />
      </div>
    );
  }
}
export default Routes;
