import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
export default function NewContactModal() {
    const idRef = useRef()
    const nameRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("fuck algo.io");
  };
  return (
    <>
      <Modal.Header closeButton>Create New Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button className="mt-2" type="submit">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
