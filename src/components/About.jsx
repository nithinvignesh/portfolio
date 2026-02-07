import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const About = () => {
    return (
        <Container id="about" className="py-5 bg-light" fluid>
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="display-4 fw-bold text-dark">About Me</h2>
                        <p className="lead text-secondary">A little bit about my journey</p>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center mb-5 gx-5">
                    <Col lg={5} md={10} className="mb-4 mb-lg-0">
                        <img
                            src="https://via.placeholder.com/600x400?text=Workspace+Image"
                            alt="Workspace"
                            className="img-fluid rounded-4 shadow-lg hover-scale"
                            style={{ transition: 'transform 0.3s ease' }}
                        />
                    </Col>
                    <Col lg={7} md={10}>
                        <h3 className="h2 fw-bold mb-3 text-primary">Web Developer</h3>
                        <p className="fs-5 text-dark mb-4 lh-lg">
                            I am a recent   B.E Electronics and communication engineering graduate with a strong foundation in <span className="text-primary fw-bold">React.js, Node.js, and MongoDB</span>. Although I am a fresher, I have built several projects that demonstrate my ability to solve complex problems and deliver clean, efficient code. My goal is to leverage my skills in full-stack development to create impactful digital experiences.
                        </p>
                        <Row className="g-4">
                            <Col md={6}>
                                <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm border-start border-4 border-primary h-100">
                                    <FaGraduationCap className="text-primary me-3" size={32} />
                                    <div>
                                        <h5 className="mb-1 text-dark fw-bold">Education</h5>
                                        <p className="mb-0 text-muted small">B.E Electronics and communication (2025)</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm border-start border-4 border-success h-100">
                                    <FaCode className="text-success me-3" size={32} />
                                    <div>
                                        <h5 className="mb-1 text-dark fw-bold">Skills</h5>
                                        <p className="mb-0 text-muted small">MERN Stack, Responsive Design</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm border-start border-4 border-info h-100">
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
