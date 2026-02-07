import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4 mt-auto">
            <Container>
                <div className="text-center small">
                    {/* Copyright with dynamic year */}
                    <p>&copy; {new Date().getFullYear()} FresherDev. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
