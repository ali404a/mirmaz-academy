import React from 'react';

const Ticker = ({ dark = false }) => {
  const items = Array(12).fill('مرماز أكاديمي');
  return (
    <div className={`ticker-strip ${dark ? 'dark' : ''}`}>
      <div className="ticker-track">
        {items.map((text, i) => (
          <div className="ticker-item" key={i}>
            <span className="dot"></span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
