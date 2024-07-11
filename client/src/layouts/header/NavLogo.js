import React from 'react'
import { BsFillBoxFill } from "react-icons/bs";
import { RiBox1Fill } from "react-icons/ri";
import { TbAlpha } from "react-icons/tb";

const NavLogo = () => {
  return (
    <>
    <div className='nav-logo'>
        <span className='nav-icon'>
            <RiBox1Fill />
        </span>
        <span className='nav-title'>
            Pack<TbAlpha />Box
        </span>
    </div>
    </>
  );
};

export default NavLogo;