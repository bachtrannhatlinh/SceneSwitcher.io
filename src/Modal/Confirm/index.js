import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useStatusContext } from '../../context/StatusContext';

function ConfirmationModal(props) {
  const { status, show, onHide } = props;

  const { updateStatus } = useStatusContext();

  const handleConfirmed = () => {
    updateStatus({ status });
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          By Skipping The Voiceover Change, You Won't Be Able To Change The Background Music And Will Be Redirected To Download Your Video With The New Scenes.
        </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="outline-dark" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleConfirmed}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;

