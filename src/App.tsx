import comingSoon from './comingSoon.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="ch-website-container">
      <header className="ch-website-header">
        <img alt="Claire & Hannah website coming soon visual" className="coming-soon-png" height="100%" src={comingSoon} width="100%" />
      </header>
    </div>
  );
}
export default App;
