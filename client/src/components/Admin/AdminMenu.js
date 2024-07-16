import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoBrowser, GoChecklist, GoColumns, GoCopy, GoCreditCard, GoCrossReference, GoGear, GoHeart, GoIterations, GoMultiSelect, GoNote, GoPackage, GoPeople, GoProject, GoRows, GoServer, GoStack, GoSync, GoUnread, GoVersions } from 'react-icons/go';
import { VscAccount } from 'react-icons/vsc';
import { useAuth } from '../../context/auth';


const AdminMenu = () => {
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
    <section className='auth account admin'>
          <div className='account-aside'>

            <div className='form-main account-form'>
              <ul className='account-links'>
                <li className='auth-item account-item'>
                    <NavLink to='/admin/dashboard' className='auth-link account-link'>
                        <i className='icon'><GoProject /></i>
                        <span className='text'>  Dashboard</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/admin/users' className='auth-link account-link'>
                        <i className='icon'><GoPeople /></i>
                        <span className='text'>  Manage Users</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/admin/orders' className='auth-link account-link'>
                        <i className='icon'><GoVersions /></i>
                        <span className='text'>  Manage Orders</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/admin/categories' className='auth-link account-link'>
                        <i className='icon'><GoCopy /></i>
                        <span className='text'>  Manage Sectors</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/admin/categories' className='auth-link account-link'>
                        <i className='icon'><GoStack /></i>
                        <span className='text'>  Manage Categories</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/admin/products' className='auth-link account-link'>
                        <i className='icon wishlist-icon'><GoRows /></i>
                        <span className='text'>  Manage Products</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/admin/refunds' className='auth-link account-link'>
                        <i className='icon'><GoSync /></i>
                        <span className='text'>  Manage Refunds</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/admin/reviews' className='auth-link account-link'>
                        <i className='icon'><GoChecklist /></i>
                        <span className='text'>  Manage Reviews</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/admin/queries' className='auth-link account-link'>
                        <i className='icon'><GoCrossReference /></i>
                        <span className='text'> Users Queries</span>
                    </NavLink>
                </li>
                <li className='auth-item account-item'>
                    <NavLink to='/admin/settings' className='auth-link account-link'>
                        <i className='icon'><GoGear /></i>
                        <span className='text'> Admin Settings</span>
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

export default AdminMenu;