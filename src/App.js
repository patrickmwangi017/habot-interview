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
          
          </div>
        <Container className="my-5">
       
          <h1>Welcome to My Website</h1>
          <p>This is the home page content.</p>
        </Container>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}

export default App;
