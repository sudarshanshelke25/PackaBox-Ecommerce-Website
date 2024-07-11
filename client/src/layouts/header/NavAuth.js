import React from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping, FaCircleUser, FaHouseChimney } from "react-icons/fa6";
import { IoStorefront } from "react-icons/io5";

const NavAuth = () => {
  return (
    <>
        <div className='nav-auth'>
            <li className='auth-item'>
                <Link to='/' className='auth-link'>
                    <i><IoStorefront /></i> Home
                </Link>
            </li>
            <li className='auth-item'>
                <Link to='/login' className='auth-link'>
                    <i><FaCircleUser /></i> LogIn
                </Link>
            </li>
            <li className='auth-item'>
                <Link to='/signup' className='auth-link'>
                    <i><FaCircleUser /></i> SignUp
                </Link>
            </li>
            <li className='auth-item'>
                <Link to='/cart' className='auth-link'>
                    <i><FaCartShopping /></i> Cart
                </Link>
            </li>
        </div>
    </>
  );
};

export default NavAuth;