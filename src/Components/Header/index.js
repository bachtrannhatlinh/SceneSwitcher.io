import React, { useState } from 'react';
import { Navbar, Container, Dropdown, DropdownToggle, DropdownMenu } from 'react-bootstrap';
import logo from '../../images/logo.png';
import avatarPerson from '../../images/avatar_person.png';
import './styled.scss';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
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

          {/* User Info (Credits Remaining and Profile Icon with Dropdown) */}
          <div className="d-flex align-items-center profile">
            <span className="text-white pe-3">Credits Remaining: 10</span>

            {/* Dropdown for User Info */}
            <Dropdown show={dropdownOpen} onToggle={toggle}>
              <DropdownToggle
                as="div"
                style={{ cursor: 'pointer' }}
                className="d-inline-block"
                onClick={toggle}
              >
                <img
                  src={avatarPerson}
                  alt="avatarPerson"
                  style={{ maxWidth: '40px', maxHeight: '40px', marginLeft: '20px', borderRadius: '50%' }}
                />
              </DropdownToggle>

              <DropdownMenu align="end" style={{ minWidth: '200px' }}>
                <div className="p-3">
                  <p className="mb-0 fw-bold">Olivia Rhye</p>
                  <p className="mb-0" style={{ fontSize: '0.9rem' }}>olivia@example.com</p>
                </div>
                <Dropdown.Item divider />
                <Dropdown.Item href="#view-profile">View profile</Dropdown.Item>
                <Dropdown.Item href="#credit-left">
                  Credit left <span className="float-end">50</span>
                </Dropdown.Item>
                <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                <Dropdown.Item href="#logout">Log out</Dropdown.Item>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
