import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  status?: 'completed' | 'in-progress' | 'upcoming';
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const getStatusClasses = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success-500 border-success-500';
      case 'in-progress':
        return 'bg-primary-500 border-primary-500';
      case 'upcoming':
        return 'bg-gray-300 border-gray-300';
      default:
        return 'bg-primary-500 border-primary-500';
    }
  };

  return (
    <div className={`relative ${className}`} ref={timelineRef}>
      {/* Animated Vertical Line */}
      <motion.div 
        className="absolute left-4 md:left-1/2 h-full w-px bg-primary-500 origin-top"
        style={{ scaleY }}
      />

      {/* Static Background Line */}
      <div className="absolute left-4 md:left-1/2 h-full w-px bg-gray-300 transform -translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div 
            key={item.id}
            className={`relative flex flex-col md:flex-row md:space-x-6 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white transform -translate-x-1/2 flex items-center justify-center z-10">
              <div className={`w-full h-full rounded-full ${getStatusClasses(item.status)}`}>
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className={`md:w-1/2 pt-1.5 md:pt-0 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="text-sm font-medium text-primary-700 mb-1">{item.date}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;