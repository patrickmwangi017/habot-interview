// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './components/css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Icon1 from './img/1.png';
import Icon2 from './img/2.png';
import Icon3 from './img/3.png';
import Icon4 from './img/4.png';
import Icon5 from './img/5.png';
import Icon6 from './img/6.png';
import VideoSection from './components/VideoSection';

const Card = ({ icon, title, backgroundColor }) => {
  return (
    <div className="card d-flex align-items-center justify-content-center" style={{ backgroundColor, padding: '20px', border: 'none', textAlign: 'center', height: "254px" }}>
      <img src={icon} alt={title} style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
      <h4 style={{ fontSize: "20px", lineHeight: "26px", fontWeight: "500" }}>{title}</h4>
    </div>
  );
};

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
            <h1 style={{ color: "#fff", textAlign: 'center', width: '100%' }}>Explore Matching Opportunities.</h1>
          </div>
        </div>
        <Container className="my-5">
          <div className="row">
            <h2 className='pb-2' style={{ color: "#000", fontWeight: '700', fontSize: '37.34px' }}>Ready to dive into <a href='#' style={{ color: "#271555" }}> HABOT? </a></h2>
            <div className='col-md-6'>
              <p className='pb-2' style={{ color: "#000", textAlign: 'left', width: '100%' }}>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
              <button className='section-2-btn d-flex align-items-center justify-content-around' style={{ fontWeight: '700', fontSize: '18px' }}> Sign up Today ! <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
            <div className='col-md-6'>
              <div className="row mb-2">
                <div className='col-md-12 d-flex align-items-center justify-content-between'>
                  <button className='section-2-btn-2'> Abu Dhabi </button>
                  <button className='section-2-btn-2'> Dubai </button>
                </div>
              </div>
              <div className="row mb-2">
                <div className='col-md-12 d-flex align-items-center justify-content-between'>
                  <button className='section-2-btn-2'> Sharjah & Ajman </button>
                  <button className='section-2-btn-2'> Fujairah </button>
                </div>
              </div>
              <div className="row">
                <div className='col-md-12 d-flex align-items-center justify-content-between'>
                  <button className='section-2-btn-2'> Ras Al Khaimah </button>
                  <button className='section-2-btn-2'> Umm Al Quwain </button>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container className="my-5 section-3">
          <div className="row align-items-center" style={{ height: '100%' }}>
          <VideoSection />
            <div className='col-md-6'>
              <ul className="nav nav-tabs justify-content-evenly" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="buyer-tab"
                    data-bs-toggle="tab"
                    href="#buyer"
                    role="tab"
                    aria-controls="buyer"
                    aria-selected="true"
                  >
                    Buyer
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="supplier-tab"
                    data-bs-toggle="tab"
                    href="#supplier"
                    role="tab"
                    aria-controls="supplier"
                    aria-selected="false"
                  >
                    Supplier
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="buyer"
                  role="tabpanel"
                  aria-labelledby="buyer-tab"
                >
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center mb-2">
                      <div className="check-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span>Post your requirements.</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <div className="check-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span>Sit back for multiple suppliers to contact you. </span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <div className="check-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span> Choose among the suppliers based on the ratings and reviews.</span>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="supplier"
                  role="tabpanel"
                  aria-labelledby="supplier-tab"
                >
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center mb-2">
                      <div className="check-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span>Post your requirements.</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <div className="check-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span>Sit back for multiple suppliers to contact you.</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <div className="check-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span> Choose among the suppliers based on the ratings and reviews.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="section-4">
          <Container className='h-100'>
            <div className="row h-100">
              <div className='col-md-6 d-flex align-items-center justify-content-center'>
                <h2 className='pb-2' style={{ color: "#000", fontWeight: '700', fontSize: '37.34px' }}>Let Suppliers <a href='#' style={{ borderBottom: "3px solid #EB7150", color: "#000", textDecoration: "none" }}> Find You. </a></h2>
              </div>
              <div className='col-md-6 d-flex align-items-center justify-content-center'>
                <button className='section-4-btn d-flex align-items-center justify-content-around' style={{ fontWeight: '700', fontSize: '18px', color: "#fff" }}> Get Verified </button>
              </div>
            </div>
          </Container>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <Card icon={Icon1} title="Select Your Role and Sign Up" backgroundColor="#E8FBFF" />
            </div>
            <div className="col-md-4">
              <Card icon={Icon2} title="Buyers Post Your Requirements" backgroundColor="#fff" />
            </div>
            <div className="col-md-4">
              <Card icon={Icon3} title=" Review, Select, and Contact the Best Suppliers" backgroundColor="#E8FBFF" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <Card icon={Icon4} title=" Suppliers Complete your profile and get notified for opportunities" backgroundColor="#fff" />
            </div>
            <div className="col-md-4">
              <Card icon={Icon5} title="Contact to Buyers and Share your Quote for the service" backgroundColor="#E8FBFF" />
            </div>
            <div className="col-md-4">
              <Card icon={Icon6} title="Both the Parties can Connect and Make Business Leave a Feedback" backgroundColor="#fff" />
            </div>
          </div>
        </div>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}

export default App;
