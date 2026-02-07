import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { name: 'HTML5', level: 70, icon: <FaHtml5 className="text-danger" size={32} /> },
        { name: 'CSS3', level: 60, icon: <FaCss3Alt className="text-primary" size={32} /> },
        { name: 'JavaScript (ES6+)', level: 60, icon: <FaNodeJs className="text-warning" size={32} /> },
        { name: 'React.js', level: 75, icon: <FaReact className="text-info" size={32} /> },
        { name: 'Node.js', level: 60, icon: <FaNodeJs className="text-success" size={32} /> },
        { name: 'Express.js', level: 60, icon: <FaNodeJs className="text-secondary" size={32} /> },
        { name: 'MongoDB', level: 60, icon: <FaDatabase className="text-success" size={32} /> },
        { name: 'Bootstrap', level: 70, icon: <FaBootstrap className="text-purple" size={32} /> },
    ];

    return (
        <section id="skills" className="py-5 bg-white text-center">
            <Container>
                <h2 className="display-4 mb-5 fw-bold text-dark">Technical Skills</h2>
                <Row className="justify-content-center">
                    {skills.map((skill, index) => (
                        <Col md={6} lg={4} key={index} className="mb-4">
                            <div className="p-4 border rounded shadow-sm hover-shadow transition h-100 bg-white d-flex flex-column justify-content-center">
                                <div className="mb-3">
                                    {skill.icon}
                                </div>
                                <h5 className="mb-2 fw-bold text-dark">{skill.name}</h5>
                                <ProgressBar now={skill.level} label={`${skill.level}%`} variant="info" stripes animated style={{ height: '20px' }} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
