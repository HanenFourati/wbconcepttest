import React, { Component } from "react";

import Tasks from "../Components/Tasks";
import CustomizedCard from "../Components/CustomizedCard";
class Home extends Component {
  render() {
    return (
      <div style={{padding: "20px"}}>
        <div style={{padding: "20px"}}>
            <CustomizedCard 
            title="Tasks to do" 
            subtitle="Hurry Up!"
            text={ <Tasks/>} />
        </div>
       </div>
    );
  }
}

export default Home;