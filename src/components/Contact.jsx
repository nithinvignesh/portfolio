import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('success'); // In a real app, this would handle form submission
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-5 text-center">
            <Container>
                <h2 className="display-4 fw-bold mb-5 text-dark">Get In <span className="text-gradient">Touch</span></h2>
                <Row className="justify-content-center">
                    <Col lg={8} md={10}>
                        <div className="glass-card p-5 rounded-4 shadow-lg border">
                            <h3 className="h4 fw-bold mb-4">Send Me a Message</h3>
                            {status === 'success' && <Alert variant="success" className="mb-4">Message sent successfully!</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group controlId="formName">
                                            <Form.Control type="text" placeholder="Your Name" required className="p-3 border rounded-pill shadow-sm mb-3 mb-md-0" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formEmail">
                                            <Form.Control type="email" placeholder="Your Email" required className="p-3 border rounded-pill shadow-sm" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formMessage" className="mb-4">
                                    <Form.Control as="textarea" rows={5} placeholder="Your Message" required className="p-3 border rounded-3 shadow-sm" />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit" size="lg" className="px-5 py-3 rounded-pill fw-bold hover-lift transition-all">
                                        Send Message
                                    </Button>
                                </div>
                            </Form>
                            <div className="mt-5 border-top pt-4">
                                <p className="text-muted small mb-3">Or connect with me on social media:</p>
                                <div className="d-flex justify-content-center gap-3">
                                    <a href="#" className="text-secondary hover-text-primary transition-all p-2 rounded-circle bg-light shadow-sm">
                                        <FaLinkedinIn size={24} />
                                    </a>
                                    <a href="#" className="text-secondary hover-text-primary transition-all p-2 rounded-circle bg-light shadow-sm">
                                        <FaGithub size={24} />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
