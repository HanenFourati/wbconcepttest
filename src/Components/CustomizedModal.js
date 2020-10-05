import React,  { useState }  from "react";
import { Modal, Button } from "react-bootstrap";

function CustomizedModal (props) {
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return ( // variant="muted" simple type="button"
      <>
        <Button variant={ (props.styling ? "outline-dark" : "")} onClick={handleShow}>
          {props.text}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {props.body}
          </Modal.Body>
        </Modal>
      </>
    );
}

export default CustomizedModal