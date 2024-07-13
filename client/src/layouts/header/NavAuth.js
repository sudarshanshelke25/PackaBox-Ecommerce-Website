import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GoArchive, GoGift, GoHeart, GoPerson } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { useAuth } from '../../context/auth';


const NavAuth = () => {
    const [auth, setAuth] = useAuth();
    
  return (
    <>
        <div className='nav-auth'>
            {/* <li className='auth-item'>
                <Link to='/' className='auth-link'>
                    <i><IoStorefront /></i> Home
                </Link>
            </li> */}
            {
                !auth.user ? (<>
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
                </>) : (<>
                    <li className='auth-item'>
                        <NavLink to='/account' className='auth-link user-name'>
                            <i className='icon'><VscAccount /></i>
                            <span className='text'> {auth.user.name}</span>
                        </NavLink>
                    </li>
                    {/* <li className='auth-item'>
                        <NavLink to='/login' className='auth-link'>
                            <i className='icon'><GoPerson /></i>
                            <span className='text'> LogOut</span>
                        </NavLink>
                    </li> */}
                </>)
            }
            
            <li className='auth-item'>
                <NavLink to='/cart' className='auth-link'>
                    <i className='icon'><GoArchive /></i>
                    <span className='text'>  Cart</span>
                </NavLink>
            </li>
            <li className='auth-item'>
                <NavLink to='/cart' className='auth-link'>
                    <i className='icon wishlist-icon'><GoHeart /></i>
                    <span className='text'>  Wishlist</span>
                </NavLink>
            </li>

            
        </div>
    </>
  );
};

export default NavAuth;