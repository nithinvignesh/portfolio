import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm py-3">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
                    <FaCode className="me-2 text-primary" size={24} />
                    <span className="text-white">FresherDev</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="mx-2">About</Nav.Link>
                        <Nav.Link as={Link} to="/skills" className="mx-2">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/projects" className="mx-2">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/" className="mx-2 btn btn-outline-primary text-white px-4 rounded-pill">HIRE ME</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
