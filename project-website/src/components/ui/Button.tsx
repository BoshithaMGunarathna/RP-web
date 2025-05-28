import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  onClick,
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-200 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2',
    outline: 'bg-transparent border border-primary-700 text-primary-700 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    ghost: 'bg-transparent text-primary-700 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed pointer-events-none' 
    : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;