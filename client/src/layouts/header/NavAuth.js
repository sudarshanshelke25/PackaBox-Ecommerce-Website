import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoStorefront } from "react-icons/io5";
import { GoArchive, GoPerson } from "react-icons/go";

const NavAuth = () => {
  return (
    <>
        <div className='nav-auth'>
            {/* <li className='auth-item'>
                <Link to='/' className='auth-link'>
                    <i><IoStorefront /></i> Home
                </Link>
            </li> */}
            <li className='auth-item'>
                <NavLink to='/login' className='auth-link'>
                    <i className='icon'><GoPerson /></i>
                    <span className='text'> LogIn</span>
                </NavLink>
            </li>
            <li className='auth-item'>
                <NavLink to='/signup' className='auth-link'>
                    <i className='icon'><GoPerson /></i>
                    <span className='text'> SignUp</span>
                </NavLink>
            </li>
            <li className='auth-item'>
                <NavLink to='/cart' className='auth-link'>
                    <i className='icon'><GoArchive /></i>
                    <span className='text'>  Cart</span>
                </NavLink>
            </li>
        </div>
    </>
  );
};

export default NavAuth;