import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import logoModal from '../../images/logo_modal.png'

import './styled.scss'

const Processing = () => {
  const navigate = useNavigate();

  const directLoginPage = () => {
    navigate('/login');
  }

  return (
<div>
  <Container
    className="d-flex justify-content-center align-items-center flex-grow-1"
    style={{ height: '50vh' }} // Đặt chiều cao cho Container
  >
    <Card
      className="shadow p-4 text-left"
      style={{ borderRadius: '10px', maxWidth: '595px' }}
    >
      <img
        src={logoModal}
        alt="VSLOptimiser.io"
        className="d-block mx-auto"
        style={{ maxWidth: '50%', maxHeight: '100%' }}
      />

      <h4 className="mt-5">Processing Videos.</h4>

      <Button variant="outline-danger" className="mt-5 w-100" onClick={directLoginPage}>
        Cancel
      </Button>
    </Card>
  </Container>
</div>

  );
};

export default Processing;
