// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './components/css/main.css';

function App() {
  return (
    <div>
      {/* Reusable Header */}
      <Header />

      {/* Main content */}
      <main>
        <div className="row section-1">
          <div className='col-md-12'>
            <h1 style={{ color: "#fff", textAlign: 'center', width: '100%', marginTop: '10%', fontWeight: '700', fontSize: '55px' }}>Are You a Supplier?</h1>
<<<<<<< HEAD
            <h1 style={{ color: "#fff", textAlign: 'center', width: '100%' }}>Explore Matching Opportunities.</h1>
=======
            <h4 style={{ color: "#fff", textAlign: 'center', width: '100%' }}>Explore Matching Opportunities.</h4>
>>>>>>> e2ae76c11f549a24aab3101072488003977917c6
          </div>
        </div>
        <Container className="my-5">

          <div className="row">
          <h2 className='pb-2' style={{ color: "#000", fontWeight: '700', fontSize: '55px' }}>Ready to dive into <a href='#'> HABOT? </a></h2>
            <div className='col-md-6'>
              <p className='pb-2' style={{ color: "#000", textAlign: 'left', width: '100%' }}>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
              <button className='section-2-btn'> Sign up Today ! </button>
            </div>
            <div className='col-md-6'>
              <div className="row mb-2">
                <div className='col-md-12 d-flex align-items-center justify-content-between'>
                  <button className='section-2-btn-2'> Sign up Today ! </button>
                  <button className='section-2-btn-2'> Sign up Today ! </button>
                </div>
              </div>
              <div className="row mb-2">
                <div className='col-md-12 d-flex align-items-center justify-content-between'>
                  <button className='section-2-btn-2'> Sign up Today ! </button>
                  <button className='section-2-btn-2'> Sign up Today ! </button>
                </div>
              </div>
              <div className="row">
                <div className='col-md-12 d-flex align-items-center justify-content-between'>
                  <button className='section-2-btn-2'> Sign up Today ! </button>
                  <button className='section-2-btn-2'> Sign up Today ! </button>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container className="my-5 section-3">

          <div className="row">
            <div className='col-md-6'>
<<<<<<< HEAD
            <iframe width="100%" height="350px" src="https://www.youtube.com/embed/tgbNymZ7vqY">
=======
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
>>>>>>> e2ae76c11f549a24aab3101072488003977917c6
            </iframe>
            </div>
            <div className='col-md-6'>
              
            </div>
          </div>
        </Container>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}

export default App;
