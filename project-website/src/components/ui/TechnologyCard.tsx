import React from 'react';

const TechnologyCard = ({ name, imageSrc }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      width: '150px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={imageSrc} 
        alt={name} 
        style={{ 
          width: '80px', 
          height: '80px', 
          objectFit: 'cover', 
          borderRadius: '50%', 
          display: 'inline-block' 
        }} 
      />
      <h3 style={{ marginTop: '12px', fontSize: '16px' }}>{name}</h3>
    </div>
  );
};

export default TechnologyCard;
