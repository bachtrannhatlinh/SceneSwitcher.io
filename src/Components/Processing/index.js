import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useStatusContext } from '../../context/StatusContext';
import logoModal from '../../images/logo_modal.png';
import './styled.scss';

const ProcessingModal = (props) => {
  const { status, show, onHide } = props;
  const { updateStatus } = useStatusContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateStatus({ status: status });
    }, 2000);
  
    return () => clearTimeout(timeoutId);
  }, [status, updateStatus]);

  const handleUpdateStatus = () => {
    onHide(false);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body className="text-center">
        <img
          src={logoModal}
          alt="VSLOptimiser.io"
          className="d-block mx-auto"
          style={{ maxWidth: '50%', maxHeight: '100%' }}
        />
        <h4 className="mt-4">Processing Videos.</h4>
        <Button variant="outline-danger" className="mt-4 w-100" onClick={handleUpdateStatus}>
          Cancel
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ProcessingModal;
