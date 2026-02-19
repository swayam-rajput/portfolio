"use client";

import { useState } from "react";
interface TooltipProps {
  children: React.ReactNode
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}
export const MinimalTooltip = ({ children, text, position = "top", className = "" }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
    left: "right-full top-1/2 -translate-y-1/2 mr-1",
    right: "left-full top-1/2 -translate-y-1/2 ml-1"
  };

  return (
    <div 
      className={`relative select-none whitespace-nowrap inline-flex ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <div
        className={`absolute ${positions[position]} px-2.5 py-1.5 dark:bg-zinc-600/40 bg-zinc-100 text-black dark:text-white text-xs border border-input font-medium rounded-md whitespace-nowrap pointer-events-none transition-all duration-100 ease-out z-50 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-1'
        }`}
        style={{
          boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2)'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default MinimalTooltip;