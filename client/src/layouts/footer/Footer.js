import React from 'react';
import FooterInfo from './FooterInfo';
import './footer.css';
import FooterBar from './FooterBar';
import SocialLinks from './SocialLinks';
import CategoryLinks from './CategoryLinks';
import AccountLinks from './AccountLinks';
import QuickLinks from './QuickLinks';
import LegalLinks from './LegalLinks';

const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='footer'>
        <div className='footer-main'>
          <FooterInfo/>
          <QuickLinks/>
          <AccountLinks/>
          <CategoryLinks/>
          <LegalLinks/>
          <SocialLinks/>
        </div>
        <FooterBar/>
      </div>
    </section>
  );
};

export default Footer;