import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, handleClose, handleConfirm }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this entry?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleConfirm}>
          Yes
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;