// CustomCursor.js
import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.querySelector('.custom-cursor');
      cursor.style.left = `${event.pageX}px`;
      cursor.style.top = `${event.pageY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="custom-cursor fixed w-5 h-5 bg-black rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"></div>;
};

export default CustomCursor;
