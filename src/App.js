import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Routes from "./Router/Routes";

import SNavbar from  "./Components/SNavbar";
import Header from "./Components/Header"
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <Container fluid={true}>
      <Row >
        <Col lg={2} className="bg-dark">
          <SNavbar/>
        </Col>
        <Col lg={10} className="bg-light" style={{padding:"0px"}} >
           <Header/>
           <div>
             <BrowserRouter >
               <Routes />
             </BrowserRouter>
           </div>
           <Footer/>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default App;
