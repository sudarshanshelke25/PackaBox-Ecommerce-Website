import React from 'react'
import { Link } from 'react-router-dom'

const AccountLinks = () => {
  return (
    <div className='footer-col category-links'>
        <h5 className='section-title'>
            Account
        </h5>
        <ul className='footer-links'>
            <li>
                <Link to='/'> My Account</Link>
            </li>
            <li>
                <Link to='/'> Orders History</Link>
            </li>
            <li>
                <Link to='/'> Notifications</Link>
            </li>
            <li>
                <Link to='/'> Wishlist</Link>
            </li>
        </ul>
    </div>
  );
};

export default AccountLinks;