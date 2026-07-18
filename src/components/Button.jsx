import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'normal', 
  icon, 
  to, 
  href, 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'large' ? 'btn-large' : '';
  const combinedClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
