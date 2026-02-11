import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import img from '../assets/img.jpeg';

const Hero = () => {
    return (
        <Container fluid className="vh-100 d-flex align-items-center position-relative overflow-hidden hero-section">
            <Container className="position-relative z-1">
                <Row className="align-items-center justify-content-center text-center text-lg-start">
                    <Col lg={7} md={12} className="mb-5 mb-lg-0">
                        <div className="display-4 fw-bold text-dark">
                            Hello, I'm <span className="text-gradient">Fresher</span>
                        </div>
                        <h2 className="mb-4 text-secondary">MERN Stack Developer</h2>
                        <p className="lead mb-4 text-muted">
                            Passionate about building scalable web applications. Eager to solve real-world problems through clean code and innovative solutions. Always learning, always building.
                        </p>
                        <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                            <Button as={Link} to="/projects" variant="primary" size="lg" className="px-4 py-2 rounded-pill shadow-sm hover-lift">
                                View My Work
                            </Button>
                            <Button variant="outline-dark" size="lg" href="#contact" className="px-4 py-2 rounded-pill hover-lift">
                                Contact Me
                            </Button>
                        </div>
                    </Col>
                    <Col lg={5} md={8} className="pos-relative">
                        <div className="image-wrapper position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            {/* Decorative background circle */}
                            <div className="position-absolute top-50 start-50 translate-middle rounded-circle"
                                style={{
                                    width: '120%',
                                    paddingBottom: '120%',
                                    zIndex: -1,
                                    filter: 'blur(60px)',
                                    background: 'conic-gradient(from 180deg at 50% 50%, #6366f1 0deg, #ec4899 120deg, #8b5cf6 240deg, #6366f1 360deg)',
                                    opacity: 0.3
                                }}></div>
                            <Image
                                src={img}
                                alt="Profile"
                                fluid
                                roundedCircle
                                thumbnail
                                className="shadow-lg border-0 bg-dark p-2"
                                style={{ objectFit: 'cover', transform: 'rotate(1deg)' }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Hero;
