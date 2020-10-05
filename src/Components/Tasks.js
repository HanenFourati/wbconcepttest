import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

import CustomCheckbox from "../Components/CustomCheckbox.js";

const  Task = (props) =>
                        props.TaskList.map((currentTask, i) =>
                        <tr>
                          <td>
                          <CustomCheckbox
                             isChecked={i%2 === 0 ? true : false}
                           />
                          </td>
                          <td>
                             <p>
                               You have an/a &nbsp; {currentTask.type} &nbsp;
                               for an &nbsp; <Link>{currentTask.equipement_Id}</Link> &nbsp;
                               located in &nbsp; <Link>{currentTask.building_Id}</Link> &nbsp;
                               at &nbsp; {currentTask.Date}
                              </p> 
                            </td>
                        </tr>
                        )

class Tasks extends Component {

  componentDidMount() {
    axios
    .get("/home")
    .then(res =>
      this.props.initTasksList(res.data));
  };

  render() {
    return (
        <div>
           <Table className="CustomizedTable" responsive hover >
             <tbody>
             <Task  TaskList={this.props.TasksList} />
             </tbody> 
           </Table>
         </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    TasksList: state.TasksReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initTasksList: tasks => {
      dispatch({
        type: "UPDATE_TASKS_LIST",
        tasks
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
