import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="text-light bg-dark text-center text-lg-start">
      <div className="text-center pt-3 pb-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container">
          <p className='follow-me' >
            Follow me on 
            <a href="https://linkedin.com/in/gaston-techera-developer/" className="text-light" target='blank' style={{ marginLeft: '5px' }}>LinkedIn</a>,
            <a href="https://github.com/gastontechera" className="text-light" target='blank' style={{ marginLeft: '5px' }}>GitHub</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
