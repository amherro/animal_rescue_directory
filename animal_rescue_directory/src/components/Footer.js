import React from 'react';
import logo from '../images/github_logo.png'

const Footer = () => {
  return <div>
      <footer className='footer'>
        <div className="footer_content">
            <a href="https://github.com/amherro" className="github_link">
                <img src={logo} alt="GitHub Logo" />
            </a>
            <p className='copyright'>Copyright © 2021 amherro</p>
        </div>
      </footer>
  </div>;
};

export default Footer;
