import React, { useEffect } from 'react';
import './style.css';

const NavigationButton: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('nav-button-container');
    if (container) {
      container.innerHTML = `<button id="nav-button">Click Me</button>`;
      const button = container.querySelector('#nav-button');
      button?.addEventListener('click', () => {
        alert('Hello!');
      });
    }
  }, []);

  return <div id="nav-button-container"></div>;
};

export default NavigationButton;
