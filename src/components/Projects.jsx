import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'MERN E-Commerce Platform',
            description: 'A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
            image: 'https://via.placeholder.com/400x250?text=E-Commerce+App',
            github: '#',
            demo: '#',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
        },
        {
            title: 'Task Management Dashboard',
            description: 'A project management tool with drag-and-drop task organization, team collaboration features, and real-time updates.',
            image: 'https://via.placeholder.com/400x250?text=Task+Manager',
            github: '#',
            demo: '#',
            tech: ['React', 'Firebase', 'Material UI'],
        },
        {
            title: 'Weather Forecast App',
            description: 'A responsive weather application that fetches real-time weather data based on user location or city search.',
            image: 'https://via.placeholder.com/400x250?text=Weather+App',
            github: '#',
            demo: '#',
            tech: ['React', 'OpenWeatherMap API', 'Bootstrap'],
        },
    ];

    return (
        <section id="projects" className="py-5 bg-light">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold text-dark">My Projects</h2>
                    <p className="lead text-muted">Here are some of the projects I've built recently.</p>
                </div>
                <Row className="g-4">
                    {projects.map((project, index) => (
                        <Col lg={4} md={6} key={index}>
                            <Card className="h-100 shadow-sm border-0 hover-lift transition-all">
                                <Card.Img variant="top" src={project.image} alt={project.title} className="rounded-top-lg object-fit-cover" style={{ height: '200px' }} />
                                <Card.Body className="d-flex flex-column">
                                    <div className="mb-2">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="badge bg-primary me-1 mb-1 rounded-pill px-2 py-1 small">{tech}</span>
                                        ))}
                                    </div>
                                    <Card.Title className="fw-bold mb-2 h5 text-dark">{project.title}</Card.Title>
                                    <Card.Text className="text-muted flex-grow-1 small lh-sm">
                                        {project.description}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between mt-3">
                                        <Button variant="outline-dark" size="sm" href={project.github} target="_blank" className="d-flex align-items-center gap-1 rounded-pill px-3">
                                            <FaGithub /> GitHub
                                        </Button>
                                        <Button variant="primary" size="sm" href={project.demo} target="_blank" className="d-flex align-items-center gap-1 rounded-pill px-3">
                                            <FaExternalLinkAlt /> Live Demo
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
