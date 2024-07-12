import React from 'react';
import { RiBox1Fill } from "react-icons/ri";
import { TbAlpha } from "react-icons/tb";

const FooterBar = () => {
  return (
    <div className='footer-bar'>
        Copyright &copy; 2024 <span><RiBox1Fill /> Pack<TbAlpha />Box</span>. All right reserved.
    </div>
  );
};

export default FooterBar;