import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase, FaCode, FaCheckCircle } from 'react-icons/fa';

const About = () => {
    return (
        <Container id="about" className="py-5 position-relative" fluid>
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="display-4 fw-bold text-dark">About <span className="text-gradient">Me</span></h2>
                        <p className="lead text-secondary">A little bit about my journey</p>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center mb-5 gx-5">
                    <Col lg={5} md={10} className="mb-4 mb-lg-0">
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                            alt="Coding Workspace"
                            className="img-fluid rounded-4 shadow-lg hover-scale"
                            style={{ transition: 'transform 0.3s ease' }}
                        />
                    </Col>
                    <Col lg={7} md={10}>
                        <h3 className="h2 fw-bold mb-3 text-primary">Web Developer</h3>
                        <ul className="list-unstyled fs-5 text-dark mb-4 lh-lg d-flex flex-column gap-3">
                            <li className="d-flex align-items-start">
                                <FaCheckCircle className="text-primary me-3 mt-1 flex-shrink-0" />
                                <span>Recent <strong>B.E. Electronics and Communication Engineering</strong> graduate.</span>
                            </li>
                            <li className="d-flex align-items-start">
                                <FaCheckCircle className="text-primary me-3 mt-1 flex-shrink-0" />
                                <span>Strong foundation in <span className="text-primary fw-bold">React.js, Node.js, and MongoDB</span>.</span>
                            </li>
                            <li className="d-flex align-items-start">
                                <FaCheckCircle className="text-primary me-3 mt-1 flex-shrink-0" />
                                <span>Built diverse projects showcasing clean code and problem-solving skills.</span>
                            </li>
                            <li className="d-flex align-items-start">
                                <FaCheckCircle className="text-primary me-3 mt-1 flex-shrink-0" />
                                <span>Passionate about creating impactful digital experiences through full-stack development.</span>
                            </li>
                        </ul>
                        <Row className="g-4">
                            <Col md={6}>
                                <div className="d-flex align-items-center p-3 glass-card rounded-3 h-100 border-start border-4 border-primary">
                                    <FaGraduationCap className="text-primary me-3" size={32} />
                                    <div>
                                        <h5 className="mb-1 text-dark fw-bold">Education</h5>
                                        <p className="mb-0 text-muted small">B.E Electronics and communication (2025)</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex align-items-center p-3 glass-card rounded-3 h-100 border-start border-4 border-success">
                                    <FaCode className="text-success me-3" size={32} />
                                    <div>
                                        <h5 className="mb-1 text-dark fw-bold">Skills</h5>
                                        <p className="mb-0 text-muted small">MERN Stack, Responsive Design</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex align-items-center p-3 glass-card rounded-3 h-100 border-start border-4 border-info">
                                    <FaBriefcase className="text-info me-3" size={32} />
                                    <div>
                                        <h5 className="mb-1 text-dark fw-bold">Experience</h5>
                                        <p className="mb-0 text-muted small">Fresher / Personal Projects</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </Container>
    );
};

export default About;
