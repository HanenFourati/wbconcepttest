import React, { Component } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer style={{backgroundColor: "white", padding: "5px"}}>
        <Container>
          <Row>
            <Col lg={9}>
             <Nav >
               <Nav.Item>
                   <Nav.Link  href="/home" style={{color:"#d8c44d"}}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                   <Nav.Link href="/Clients" style={{color:"#d8c44d"}}>Client List</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={3}>
              <p className="copyright pull-right">
                &copy; {new Date().getFullYear()}{" "}
                Hanen Fourati
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;