import React from 'react';

import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import logoLogin from '../../images/logo_login.png'
import eye from '../../images/eye.png'

import './styled.scss'

function LoginForm() {
  const navigate = useNavigate();

  const directHomePage = () => {
    navigate('/');
  }

  return (
    <div className='login'>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col xs={12} md={6} lg={4} className="mx-auto">
            <Card className="p-4 shadow">
              <Card.Body>
                <div className="text-center mb-4">
                  <img
                    src={logoLogin}
                    alt="Logo"
                    className="mx-auto d-block"  // Ensure image is centered
                    style={{ maxWidth: '100%' }}
                  />
                  <h2 className="mt-3">Sign In</h2>
                </div>
                <Form>
                  <Form.Group controlId="formBasicEmail" className="mb-3 emall_address">
                    <Form.Label className='label'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-3 password">
                    <Form.Label className='label'>Password</Form.Label>
                    <div className='d-flex eye'>
                      <Form.Control type="password" placeholder="Password" />
                      <img
                        src={eye}
                        alt="eye"
                        className="mx-auto d-block"  // Ensure image is centered
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  </Form.Group>

                  <div className="d-flex justify-content-between mb-3 forgot_password">
                    <a href="#forgot-password" className="text-muted">
                      Forgot password?
                    </a>
                  </div>

                  <Button variant="dark" type="submit" className="w-100 sign_in mt-3" onClick={directHomePage}>
                    <span>Sign In</span>
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default LoginForm;

