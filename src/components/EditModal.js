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
        <Form>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity (ml)</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
            Save
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;