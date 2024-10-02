import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

import logo from '../../images/logo.png'
import avatarPerson from '../../images/avatar_person.png'

import './styled.scss'

export default function Header() {
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
    </>
  )
}
