import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditModal = ({ show, handleClose, handleSave, initialValue }) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(quantity);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Water Intake</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity (ml)</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;