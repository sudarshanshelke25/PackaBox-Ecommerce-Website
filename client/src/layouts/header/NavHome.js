import React from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping, FaCircleUser, FaHouseChimney } from "react-icons/fa6";
import { IoStorefront } from "react-icons/io5";

const NavHome = () => {
  return (
    <>
        <div className='nav-auth'>
            <li className='auth-item'>
                <Link to='/' className='auth-link'>
                    <i><IoStorefront /></i> Home
                </Link>
            </li>
            <li className='auth-item'>
                <Link to='/about' className='auth-link'>
                    <i><FaCircleUser /></i> About
                </Link>
            </li>
            <li className='auth-item'>
                <Link to='/signup' className='auth-link'>
                    <i><FaCircleUser /></i> Services
                </Link>
            </li>
        </div>
    </>
  );
};

export default NavHome;