import React, { useRef, useEffect, useState } from 'react';

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  status?: 'completed' | 'in-progress' | 'upcoming';
  marksAllocated?: number;
  progress?: number;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animateProgress, setAnimateProgress] = useState<boolean[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const elementTop = rect.top;
      const startOffset = windowHeight;
      const endOffset = -elementHeight;
      const totalDistance = startOffset - endOffset;
      const currentProgress = (startOffset - elementTop) / totalDistance;
      
      setScrollProgress(Math.max(0, Math.min(1, currentProgress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    setTimeout(() => {
      setAnimateProgress(new Array(items.length).fill(true));
    }, 1000);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  const getStatusClasses = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-blue-500 border-blue-500 shadow-lg shadow-blue-200';
      case 'in-progress':
        return 'bg-blue-400 border-blue-400 shadow-lg shadow-blue-200 ring-2 ring-blue-300 ring-opacity-50';
      case 'upcoming':
        return 'bg-slate-300 border-slate-300 shadow-md shadow-slate-200';
      default:
        return 'bg-blue-500 border-blue-500 shadow-lg shadow-blue-200';
    }
  };

  const getCardClasses = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-white hover:bg-blue-50 border border-blue-100 shadow-lg hover:shadow-xl hover:border-blue-200';
      case 'in-progress':
        return 'bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 border-2 border-blue-200 shadow-xl hover:shadow-2xl ring-1 ring-blue-300 ring-opacity-30';
      case 'upcoming':
        return 'bg-white hover:bg-slate-50 border border-slate-200 shadow-md hover:shadow-lg';
      default:
        return 'bg-white hover:bg-blue-50 border border-blue-100 shadow-lg hover:shadow-xl';
    }
  };

  const getDateClasses = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'text-blue-600 bg-blue-100 px-3 py-1 rounded-full';
      case 'in-progress':
        return 'text-blue-700 bg-blue-200 px-3 py-1 rounded-full font-semibold';
      case 'upcoming':
        return 'text-slate-600 bg-slate-100 px-3 py-1 rounded-full';
      default:
        return 'text-blue-600 bg-blue-100 px-3 py-1 rounded-full';
    }
  };

  return (
    <div className={`relative ${className}`} ref={timelineRef}>
      <div 
        className="absolute left-4 md:left-1/2 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-slate-300 origin-top transform -translate-x-1/2 transition-all duration-300 ease-out rounded-full"
        style={{ 
          height: `${scrollProgress * 100}%`,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
        }}
      />

      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-200 transform -translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div 
            key={item.id}
            className={`relative flex flex-col md:flex-row md:space-x-6 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}
            style={{
              opacity: scrollProgress > (index / items.length) ? 1 : 0.3,
              transform: `translateY(${scrollProgress > (index / items.length) ? 0 : 20}px)`,
              transition: 'all 0.6s ease-out'
            }}
          >
            <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full border-4 border-white transform -translate-x-1/2 flex items-center justify-center z-10 transition-all duration-300">
              <div className={`w-full h-full rounded-full flex items-center justify-center text-white transition-all duration-300 ${getStatusClasses(item.status)}`}>
                {item.icon}
              </div>
            </div>

            <div className={`md:w-1/2 pt-1.5 md:pt-0 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${getCardClasses(item.status)}`}>
                <div className={`text-sm font-medium mb-3 inline-block ${getDateClasses(item.date)}`}>
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {(item.marksAllocated || item.progress !== undefined) && (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      {item.marksAllocated && (
                        <span className="text-sm text-slate-700">
                          <span className="font-semibold text-blue-600">{item.marksAllocated}</span> marks allocated
                        </span>
                      )}
                      {item.progress !== undefined && (
                        <span className="text-sm font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                          {item.progress}%
                        </span>
                      )}
                    </div>
                    
                    {item.progress !== undefined && (
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out shadow-sm"
                          style={{ 
                            width: animateProgress[index] ? `${item.progress}%` : '0%',
                            transitionDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                    )}
                  </>
                )}
                
                {/* <div className="mt-4 flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    item.status === 'completed' ? 'bg-blue-500' : 
                    item.status === 'in-progress' ? 'bg-blue-400' : 
                    'bg-slate-300'
                  }`}></div>
                  <span className={`text-xs font-medium uppercase tracking-wide ${
                    item.status === 'completed' ? 'text-blue-600' : 
                    item.status === 'in-progress' ? 'text-blue-500' : 
                    'text-slate-500'
                  }`}>
                    {item.status?.replace('-', ' ') || 'completed'}
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* {items.some(item => item.progress !== undefined) && (
        <div className="mt-16 pt-8 border-t border-blue-100">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-slate-800">Overall Progress</span>
              <span className="text-2xl font-bold text-blue-600">
                {Math.round(
                  items
                    .filter(item => item.progress !== undefined)
                    .reduce((sum, item) => sum + (item.progress || 0), 0) / 
                  items.filter(item => item.progress !== undefined).length
                )}% Complete
              </span>
            </div>
            <div className="w-full h-3 bg-white rounded-full overflow-hidden shadow-inner border border-blue-100">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full transition-all duration-2000 ease-out shadow-sm"
                style={{ 
                  width: animateProgress.length > 0 
                    ? `${Math.round(
                        items
                          .filter(item => item.progress !== undefined)
                          .reduce((sum, item) => sum + (item.progress || 0), 0) / 
                        items.filter(item => item.progress !== undefined).length
                      )}%` 
                    : '0%',
                  transitionDelay: '1s'
                }}
              ></div>
            </div>
            <div className="mt-4 flex justify-between text-sm text-slate-600">
              <span>Total marks: {items.reduce((sum, item) => sum + (item.marksAllocated || 0), 0)}</span>
              <span>
                {items.filter(item => item.progress === 100).length} of {items.length} milestones completed
              </span>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Timeline;