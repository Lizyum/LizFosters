import React, { useState } from 'react';
import '../index.css';

const fonts = [
  'Arial, sans-serif',
  'Georgia, serif',
  'Courier New, monospace',
  'Tahoma, sans-serif',
  'Verdana, sans-serif'
];

export const FontChanger = () => {
    const [currentFontIndex, setCurrentFontIndex] = useState(0);
  
    const handleFontChange = () => {
      const newFontIndex = (currentFontIndex + 1) % fonts.length;
      setCurrentFontIndex(newFontIndex);
      document.body.style.fontFamily = fonts[newFontIndex];
    };
  
    return (
      <div className="font-changer-container">
        <button onClick={handleFontChange} className="font-changer-btn">
          Change Font
        </button>
      </div>
    );
  };