import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  fullWidth?: boolean;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'secondary';
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  centered = false,
  className = '',
  fullWidth = false,
  id,
  background = 'white',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary-700 text-white',
    secondary: 'bg-secondary-700 text-white',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <motion.div 
        className={fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8'}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {title && (
              <motion.h2 
                className="text-3xl md:text-4xl font-bold font-serif mb-4"
                variants={itemVariants}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="text-lg md:text-xl max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;