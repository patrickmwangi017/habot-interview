// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './css/Footer.css';  // For optional custom styling
import FbIcon from '../img/fb.png';
import IgIcon from '../img/ig.png';
import XIcon from '../img/x.png';
import InIcon from '../img/in.png';

function Footer() {
  return (
    <footer>
      <Container className='h-100 pt-20 pb-20'>
        <div className="row h-100 footer-main-row d-flex align-items-center justify-content-center">
          <div className='col-md-2'>
            <img
              src="./logo-white.png" // Replace with the path to your logo
              alt="Logo"
              className="d-inline-block align-top"
              style={{ width: '181px', height: '43px' }}
            /> 
            <p >© R Singhania</p>
            
          </div>
          <div className='col-md-2'>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className='col-md-2'>
            <h5>Terms</h5>
            <ul className="list-unstyled">
              <li><a href="#">Data privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
          <div className='col-md-2'>
            <h5>Related</h5>
            <ul className="list-unstyled">
              <li><a href="#">Find Buyer</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
          <div className='col-md-4 text-end d-flex align-items-center'>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={FbIcon} alt="Facebook" className='footer-social-icon' />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={XIcon} alt="Twitter" className='footer-social-icon' />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={IgIcon} alt="Instagram" className='footer-social-icon' />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={InIcon} alt="LinkedIn" className='footer-social-icon' />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>

  );
}

export default Footer;
