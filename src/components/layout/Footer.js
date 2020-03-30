import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer id="main-footer" className="bg-dark">
      <Container>
        <Row>
          <Col className="text-center py-4">
            <h3>LoopLAB</h3>
            <p>Copyright &copy; {new Date().getFullYear()} </p>
            <Button variant="primary" onClick={handleShow}>
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} className="text-dark">
        <Modal.Header closeButton>
          <Modal.Title>Send us a message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
      </Modal>
    </footer>
  );
};

export default Footer;
