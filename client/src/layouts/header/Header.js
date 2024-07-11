import React from 'react'
import NavLogo from './NavLogo'
import SearchBar from './SearchBar'
import NavAuth from './NavAuth'
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <NavLogo/>
      <SearchBar/>
      <NavAuth/>
    </div>
  )
}

export default Header