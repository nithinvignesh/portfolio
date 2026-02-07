import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Importing components for different sections of the portfolio
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Importing custom CSS for styling overrides
import './App.css';

function App() {
  return (
    // Main container with flex column layout to ensure footer stays at bottom
    <div className="App d-flex flex-column min-vh-100">
      {/* Navigation Bar */}
      <Header />

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={
          <>
            {/* Hero Section (Introduction) */}
            <Hero />
            {/* Contact Form Section (as requested on landing page) */}
            <Contact />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
