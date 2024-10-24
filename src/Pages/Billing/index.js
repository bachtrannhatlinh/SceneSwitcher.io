import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar, Form } from 'react-bootstrap';

function BillingPage() {
  return (
    <Container className="my-5">
      {/* Subscription Details Section */}
      <Card className="mb-5">
        <Card.Body>
          <Row className="d-flex justify-content-between align-items-center">
            <Col>
              <h4>Subscription Details</h4>
            </Col>
            <Col className="text-end">
              <Button variant="outline-secondary">Manage Billing Info</Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <p><strong>Current Plan:</strong> <span className="badge bg-secondary">Premium</span></p>
            </Col>
            <Col md={6}>
              <p><strong>Subscription Status:</strong> <span className="badge bg-success">Active</span></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p><strong>Credit Usage:</strong> Any Unused Credits Will Roll Over To The Next Month</p>
              <ProgressBar now={40} label="20/50 Used" />
              <small className="text-muted">Reset in 24 Days</small>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Buy More Variations Section */}
      <Row className="text-center mb-5">
        <h5>Need More Variations?</h5>
        <p>Out Of VSL Variations For The Month? Easily Add More Variations To Your Plan, With A Minimum Of 5.</p>
        <Col md={{ span: 4, offset: 4 }}>
          <Card className="p-3">
            <h6>Buy More Variations</h6>
            <p>$5 Each</p>
            <Form>
              <Form.Group controlId="formCredits">
                <Form.Control type="number" placeholder="Enter the amount of Credits" />
              </Form.Group>
              <Button className="mt-3" variant="dark">Buy</Button>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Pricing Plans Section */}
      <Row className="text-center mb-4">
        <h5>Flexible Pricing to Suit Your Needs</h5>
        <p>Think About The ROI Of One Winning VSL—Now Multiply That By 20, 40, Or Even 60! Here's What You'll Get:</p>
      </Row>

      <Row>
        {/* Basic Plan */}
        <Col md={4}>
          <Card className="p-3 text-center">
            <Card.Body>
              <h6 className="mb-3"><span className="badge bg-light text-dark">Basic</span></h6>
              <h2>$297 <small className="text-muted">Per Month</small></h2>
              <p>$14.85/video</p>
              <p>20 New Variations Per Month</p>
              <Button variant="outline-dark">Downgrade Subscription</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Professional Plan */}
        <Col md={4}>
          <Card className="p-3 text-center">
            <Card.Body>
              <h6 className="mb-3"><span className="badge bg-light text-dark">Professional</span></h6>
              <h2>$497 <small className="text-muted">Per Month</small></h2>
              <p>$12.42/video</p>
              <p>40 New Variations Per Month</p>
              <Button variant="outline-dark">Downgrade Subscription</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Premium Plan */}
        <Col md={4}>
          <Card className="p-3 text-center" style={{ backgroundColor: '#1d1f1f', color: '#fff' }}>
            <Card.Body>
              <h6 className="mb-3"><span className="badge bg-light text-dark">Premium</span></h6>
              <h2>$697 <small className="text-muted">Per Month</small></h2>
              <p>$11.62/video</p>
              <p>60 New Variations Per Month</p>
              <Button variant="light">Cancel Subscription</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BillingPage;
