import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";



import ClientItem from "../Components/ClientItem";
import CustomizedCard from "../Components/CustomizedCard";
import CustomizedModal from "../Components/CustomizedModal";
import AddClient from "../Components/AddClient";
import '../index.css'

class ClientsList extends Component {

  componentDidMount() {
    axios
    .get("/clients")
    .then(res =>
      this.props.initClientsList(res.data));
  };

  render() {
    return (
      <div style={{padding: "15px"}}>
        <div style={{padding: "15px"}}>
          <CustomizedCard title="Clients List" subtitle="Here is the clients informations"
            text={
              <div>
                <Table className="CustomizedTable" responsive hover >
                  <thead className="table-dark">
                    <tr>
                      <th>Social reason</th>
                      <th>Mobile number</th>
                      <th>Email address</th>
                      <th>Building List</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.ClientsList.map((e, i) => (
                      <tr>
                        <ClientItem key={i} client={e} />
                      </tr>
                      
                    ))}
                  </tbody>
                </Table>
                <div>
                    <CustomizedModal styling={true} title="Add a new client" text="Add Client" body={<AddClient/>} />
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
    ClientsList: state.ClientsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initClientsList: clients => {
      dispatch({
        type: "UPDATE_CLIENTS_LIST",
        clients
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientsList);
