import React from 'react'
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className='footer-col important-links'>
        <h5 className='section-title'>
            Quick Links
        </h5>
        <ul className='footer-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About Us</Link>
          </li>
          <li>
            <Link to='/'>Contact Us</Link>
          </li>
        </ul>
    </div>
  );
};

export default QuickLinks;