// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './css/Footer.css';  // For optional custom styling

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <div className="text-center">
          <p>© {new Date().getFullYear()} My Website. All Rights Reserved.</p>
          <a href="/privacy-policy" className="text-white">Privacy Policy</a> | 
          <a href="/terms" className="text-white"> Terms of Use</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
