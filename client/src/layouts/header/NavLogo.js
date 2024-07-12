import React from 'react'
import { BsFillBoxFill } from "react-icons/bs";
import { RiBox1Fill } from "react-icons/ri";
import { TbAlpha } from "react-icons/tb";
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <>
    <div className='nav-logo'>
      <Link to='/'>
        <span className='nav-icon'>
            <RiBox1Fill />
        </span>
        <span className='nav-title'>
            Pack<TbAlpha />Box
        </span>
      </Link>
    </div>
    </>
  );
};

export default NavLogo;