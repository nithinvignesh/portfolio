import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import img from '../assets/img.jpeg';

const Hero = () => {
    return (
        <Container fluid className="vh-100 d-flex align-items-center bg-dark text-white shadow-lg position-relative overflow-hidden hero-section">
            {/* Background gradient overlay */}
            <div className="gradient-overlay position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>

            <Container className="position-relative z-1">
                <Row className="align-items-center justify-content-center text-center text-lg-start">
                    <Col lg={7} md={12} className="mb-5 mb-lg-0">
                        <div className="display-4 fw-bold">
                            Hello, I'm <span className="text-primary">Fresher</span>
                        </div>
                        <h2 className="mb-4 text-light-50">MERN Stack Developer</h2>
                        <p className="lead mb-4 text-secondary-light">
                            Passionate about building scalable web applications. Eager to solve real-world problems through clean code and innovative solutions. Always learning, always building.
                        </p>
                        <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                            <Button variant="primary" size="lg" href="#projects" className="px-4 py-2 rounded-pill shadow-sm hover-lift">
                                View My Work
                            </Button>
                            <Button variant="outline-light" size="lg" href="#contact" className="px-4 py-2 rounded-pill hover-lift">
                                Contact Me
                            </Button>
                        </div>
                    </Col>
                    <Col lg={5} md={8} className="pos-relative">
                        <div className="image-wrapper position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            {/* Decorative background circle */}
                            <div className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle opacity-25"
                                style={{ width: '100%', paddingBottom: '100%', zIndex: -1, filter: 'blur(50px)' }}></div>
                            <Image
                                src={img}
                                alt="Profile"
                                fluid
                                roundedCircle
                                thumbnail
                                className="shadow-lg border-0 bg-dark p-2"
                                style={{ objectFit: 'cover', transform: 'rotate(-2deg)' }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Hero;
