import React, { Component } from "react";
import { Card } from "react-bootstrap";

class CustomizedCard extends Component {
  render() {
    return (
        <Card>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
            <Card.Text>
                {this.props.text}
            </Card.Text>
          </Card.Body>
        </Card>
    );
  }
}

export default CustomizedCard;
