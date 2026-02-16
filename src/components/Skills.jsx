import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <FaLaptopCode className="text-primary me-2" />,
            skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap 5']
        },
        {
            title: 'Backend Development',
            icon: <FaServer className="text-success me-2" />,
            skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication']
        },
        {
            title: 'Database & Tools',
            icon: <FaTools className="text-info me-2" />,
            skills: ['MongoDB', 'Mongoose', 'Git & GitHub']
        }
    ];

    return (
        <section id="skills" className="py-5 bg-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-uppercase">Technical Skills</h2>
                    <div className="mx-auto bg-primary mb-3" style={{ width: '50px', height: '3px' }}></div>
                    <p className="text-secondary">The core technologies I focus on as a MERN Stack Developer.</p>
                </div>

                <Row className="justify-content-center">
                    {skillCategories.map((category, index) => (
                        <Col key={index} lg={4} md={6} className="mb-4">
                            <div className="p-4 border shadow-sm rounded-3 h-100 bg-light">
                                <h4 className="fw-bold mb-4 d-flex align-items-center">
                                    {category.icon} {category.title}
                                </h4>
                                <ul className="list-unstyled d-flex flex-column gap-3">
                                    {category.skills.map((skill, idx) => (
                                        <li key={idx} className="d-flex align-items-center text-dark">
                                            <FaCheckCircle className="text-primary me-2 flex-shrink-0" />
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
