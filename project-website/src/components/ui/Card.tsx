import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'flat';
  onClick?: () => void;
  href?: string;
  as?: 'div' | 'article' | 'section';
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  onClick,
  href,
  as = 'div',
  hoverEffect = false,
}) => {
  const baseClasses = 'rounded-lg overflow-hidden';
  
  const variantClasses = {
    default: 'bg-white shadow',
    elevated: 'bg-white shadow-md',
    bordered: 'bg-white border border-gray-200',
    flat: 'bg-gray-50',
  };
  
  const hoverClasses = hoverEffect 
    ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer' 
    : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;
  
  const Element = as;

  const cardContent = (
    <Element className={classes} onClick={onClick}>
      {children}
    </Element>
  );

  const motionProps = {
    whileHover: hoverEffect ? { y: -8, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' } : {},
    transition: { duration: 0.2 }
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }
  
  return <motion.div className={classes} {...motionProps}>{children}</motion.div>;
};

export default Card;