import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer glass-card mt-auto py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.4)' }}>
            <Container>
                <div className="text-center small text-muted">
                    {/* Copyright with dynamic year */}
                    <p className="mb-0">&copy; {new Date().getFullYear()} <span className="fw-bold text-gradient">FresherDev</span>. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
