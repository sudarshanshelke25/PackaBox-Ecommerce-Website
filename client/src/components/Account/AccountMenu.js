import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoChecklist, GoCreditCard, GoGear, GoHeart, GoIterations, GoNote, GoUnread, GoVersions } from 'react-icons/go';
import { VscAccount } from 'react-icons/vsc';
import { useAuth } from '../../context/auth';


const AccountMenu = () => {
    const [auth, setAuth] = useAuth();

    // handle Logout Function
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem('auth');
    }

  return (
    <>
    <section className='auth account'>
          <div className='account-aside'>

            <div className='form-header account-header'>
              <div className='user-cover'>
                <img src="" alt=""/>
              </div>
              <div className='user-info'>
                <h1 className='title'>{auth.user.name}</h1>
                <h2 className='subtitle'>{auth.user.email}</h2>
              </div>
            </div>

            <div className='form-main account-form'>
              <ul className='account-links'>
                <li className='auth-item account-item'>
                    <NavLink to='/account/profile' className='auth-link account-link'>
                        <i className='icon'><VscAccount /></i>
                        <span className='text'>  Your Profile</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/account/orders' className='auth-link account-link'>
                        <i className='icon'><GoVersions /></i>
                        <span className='text'>  Your Orders</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/account/address' className='auth-link account-link'>
                        <i className='icon'><GoNote /></i>
                        <span className='text'>  Your Address</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/account/wishlist' className='auth-link account-link'>
                        <i className='icon wishlist-icon'><GoHeart /></i>
                        <span className='text'>  Your Wishlist</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/account/payments' className='auth-link account-link'>
                        <i className='icon'><GoCreditCard /></i>
                        <span className='text'>  Payment Options</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/account/reviews' className='auth-link account-link'>
                        <i className='icon'><GoChecklist /></i>
                        <span className='text'>  Reviews & Ratings</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/account/contactus' className='auth-link account-link'>
                        <i className='icon'><GoUnread /></i>
                        <span className='text'> Contact Us</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/account/settings' className='auth-link account-link'>
                        <i className='icon'><GoGear /></i>
                        <span className='text'> Settings</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink onClick={handleLogout} to='/login' className='auth-link account-link'>
                        <i className='icon'><GoIterations /></i>
                        <span className='text'>  Log Out</span>
                    </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </>
  )
};

export default AccountMenu;