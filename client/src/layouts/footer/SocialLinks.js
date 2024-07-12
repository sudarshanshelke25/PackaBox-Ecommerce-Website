import React from 'react';
import { RiFacebookFill, RiInstagramFill, RiPinterestFill, RiTwitterFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
  return (
    <div className='footer-col social-links'>
        <h5 className='section-title'>
            Social Media
        </h5>
        <ul className='footer-links social-links'>
            <li>
                <Link to='/'>
                <i><RiInstagramFill /></i> Instagram
                </Link>
            </li>
            <li>
                <Link to='/'>
                <i><RiFacebookFill /></i> Facebook
                </Link>
            </li>
            <li>
                <Link to='/'>
                <i><RiTwitterFill /></i> Twitter
                </Link>
            </li>
            <li>
                <Link to='/'>
                <i><RiPinterestFill /></i> Pinterest
                </Link>
            </li>

        </ul>
    </div>
  );
};

export default SocialLinks;