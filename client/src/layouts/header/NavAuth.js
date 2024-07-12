import React from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping, FaCircleUser, FaHouseChimney } from "react-icons/fa6";
import { IoStorefront } from "react-icons/io5";

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
                <Link to='/login' className='auth-link'>
                    <i className='icon'><FaCircleUser /></i>
                    <span className='text'> LogIn</span>
                </Link>
            </li>
            <li className='auth-item'>
                <Link to='/signup' className='auth-link'>
                    <i className='icon'><FaCircleUser /></i>
                    <span className='text'> SignUp</span>
                </Link>
            </li>
            <li className='auth-item'>
                <Link to='/cart' className='auth-link'>
                    <i className='icon'><FaCartShopping /></i>
                    <span className='text'>  Cart</span>
                </Link>
            </li>
        </div>
    </>
  );
};

export default NavAuth;