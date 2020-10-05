import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

const  BenefitItem = (props) =>
                                props.BenefitItemList.map((currentBenefitItem, i) =>
                                <tr>
                                  <td>{currentBenefitItem.Date}</td>
                                  <td>{currentBenefitItem.type}</td>
                                  <td>{currentBenefitItem.anomalies}</td>
                                </tr>
                                )

class BenefitHistory extends Component {

  componentDidMount() {
    axios
    .get(`/clients/${this.props.cltid}/buildings/${this.props.bldid}/equipements/${this.props.eqpid}`)
    .then(res => 
      this.props.initBenefitsList(res.data));
   }

  render() {
    return (
            <div>
              <Table className="CustomizedTable" responsive hover >
                <thead className="table-dark">
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Anomalies</th>
                  </tr>
                </thead>
                <tbody>
                <BenefitItem  BenefitItemList={this.props.BenefitsList} />
                </tbody> 
              </Table>
            </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    BenefitsList: state.BenefitsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initBenefitsList: benefits => {
      dispatch({
        type: "UPDATE_BENEFITS_LIST",
        benefits
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenefitHistory);