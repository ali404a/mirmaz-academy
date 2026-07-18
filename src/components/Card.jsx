import React from 'react';

const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClass = 'card';
  const hoverClass = hover ? 'card-hover' : '';
  const combinedClass = `${baseClass} ${hoverClass} ${className}`.trim();

  return (
    <div className={combinedClass} {...props}>
      {children}
    </div>
  );
};

export default Card;
