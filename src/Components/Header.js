import React, { Component } from "react";
import { Container, Dropdown, Row, Col} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header style={{backgroundColor: "white", padding: "10px"}}>
        <Container>
            <Row>
                <Col lg={10}></Col>
                <Col lg={2}>
                    <Dropdown >
                      <Dropdown.Toggle variant="muted" simple type="button" size="sm" style={{border: "1px solid #d8c44d",color:"#d8c44d"}} >
                          Settings
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="/">User Profil</Dropdown.Item>
                        <Dropdown.Item href="/">Settings</Dropdown.Item>
                        <Dropdown.Item divider/>
                        <Dropdown.Item href="/">Log out</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> 
                </Col>
            </Row>
        </Container>
      </header>
    );
  }
}

export default Header;