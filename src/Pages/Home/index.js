import React from 'react';
import { Navbar, Container, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import logo from '../../images/logo.png'
import logoModal from '../../images/logo_modal.png'
import avatarPerson from '../../images/avatar_person.png'

import './styled.scss'

const ProcessingPage = () => {
  const navigate = useNavigate();

  const directLoginPage = () => {
    navigate('/login');
  }

  return (
    <div className="processing-page d-flex flex-column min-vh-100">
      {/* Header / Navbar */}
      <Navbar variant="dark" className="header">
        <Container fluid className="d-flex justify-content-between">
          {/* Logo */}
          <Navbar.Brand href="#home">
            <img
              src={logo} 
              alt="VSLOptimiser.io"
              style={{ maxWidth: '100%', maxHeight: '100%' }} 
            />
          </Navbar.Brand>

          {/* User Info (Credits Remaining and Profile Icon) */}
          <div className="d-flex align-items-center profile">
            <span className="text-white pe-3">Credits Remaining: 10</span>
            <img
              src={avatarPerson} 
              alt="avatarPerson"
              style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: '20px'}} 
            />
          </div>
        </Container>
      </Navbar>

      {/* Main content: Centered Modal for Processing Videos */}
      <Container className="d-flex justify-content-center align-items-center flex-grow-1">
        <Card className="shadow p-4 text-left" style={{borderRadius: '10px', maxWidth: '595px' }}>
          {/* Logo */}
          <img
            src={logoModal} 
            alt="VSLOptimiser.io"
            className="d-block mx-auto"
            style={{ maxWidth: '50%', maxHeight: '100%' }} // Kích thước logo
          />

          {/* Processing text */}
          <h4 className="mt-5">Processing Videos.</h4>

          {/* Cancel Button */}
          <Button variant="outline-danger" className="mt-5 w-100" onClick={directLoginPage}>
            Cancel
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default ProcessingPage;
