// src/components/Card.js
import React from 'react';

const Card = ({ icon, title, backgroundColor }) => {
  return (
    <div
      className="card d-flex align-items-center justify-content-center"
      style={{
        backgroundColor,
        padding: '20px',
        border: 'none',
        textAlign: 'center',
        height: '254px',
        borderRadius: '0px',
      }}
    >
      <img
        src={icon}
        alt={title}
        style={{ width: '70px', height: '70px', marginBottom: '22px' }}
      />
      <h4 style={{ fontSize: '20px', lineHeight: '26px', fontWeight: '500' }}>
        {title}
      </h4>
    </div>
  );
};

export default Card;
