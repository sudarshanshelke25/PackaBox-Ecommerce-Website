import React from 'react';
import { Link } from 'react-router-dom';

const LegalLinks = () => {
  return (
    <div className='footer-col social-links'>
        <h5 className='section-title'>
            Legal & Support
        </h5>
        <ul className='footer-links'>
            <li>
                <Link to='/'>
                    Feedback
                </Link>
            </li>
            <li>
                <Link to='/'>
                    Privacy Policy
                </Link>
            </li>
            <li>
                <Link to='/'>
                    Terms & Conditions
                </Link>
            </li>
            <li>
                <Link to='/'>
                    Accessibility
                </Link>
            </li>
            <li>
                <Link to='/'>
                    Support Center
                </Link>
            </li>
        </ul>
    </div>
  );
};

export default LegalLinks;