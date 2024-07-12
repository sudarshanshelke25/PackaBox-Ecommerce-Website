import React from 'react';
import NavLogo from './NavLogo';
import NavSearch from './NavSearch';
import NavAuth from './NavAuth';
import './header.css';


const Header = () => {
  return (
    <section className='header-container'>
      <div className='header'>
        <NavLogo/>
        <NavSearch/>
        <NavAuth/>
      </div>
    </section>
  )
}

export default Header