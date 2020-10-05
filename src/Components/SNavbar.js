import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../Images/logo.png';

class SNavbar extends Component {
  render() {
    return (
      <Navbar  variant="dark" className="flex-column" style={{color: "white"}}>
        <Navbar.Brand href="/home" > {/**style={{boxShadow:"0 4px 6px -6px #222"}} */}
         <img src={logo} alt="logo" className="img-thumbnail rounded" style={{height: "60px", width: "60px"}} /> &nbsp;
         <span style={{fontSize: "30px", color:"#d8c44d", verticalAlign: "text-top"}}>BMAP</span>
        </Navbar.Brand>
        <Nav className="flex-column align-middle" style={{paddingTop: "40px"}}>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/clients">Clients list</Nav.Link>
        </Nav>
    </Navbar>
    );
  }
}

export default SNavbar;