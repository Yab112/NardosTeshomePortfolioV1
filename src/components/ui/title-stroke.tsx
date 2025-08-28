import React from 'react';

interface TitleStrokeProps {
  className?: string;
  width?: number;
  height?: number;
}

const TitleStroke: React.FC<TitleStrokeProps> = ({ 
  className = "w-48 h-6", 
  width = 200, 
  height = 15 
}) => {
  return (
    <div className="flex justify-center -mt-2">
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 478 39" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
      >
        <path 
          d="M2 17.4998C71.6307 -2.12043 259.914 -10.0887 476 36.9998" 
          stroke="url(#paint0_linear_139_1366)" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        <defs>
                      <linearGradient 
              id="paint0_linear_139_1366" 
              x1="-3" 
              y1="24" 
              x2="462.5" 
              y2="37" 
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B82F6"/>
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0.01"/>
            </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TitleStroke;
