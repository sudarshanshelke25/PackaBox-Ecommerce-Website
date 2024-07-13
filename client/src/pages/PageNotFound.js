import React from 'react'
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import { CiWifiOff } from "react-icons/ci";

const PageNotFound = () => {
  return (
    <Layout>
      <div className='pnf'>
        <div className='pnf-container'>
          {/* <h1 className='pnf-logo'><CiWifiOff /><CiWifiOff /><CiWifiOff /></h1> */}
          <h1 className='pnf-logo pnf-logo'><CiWifiOff /></h1>
          <h1 className='pnf-title'>40<span className='pnf-zero'>4</span></h1>
          <h2 className='pnf-heading'> Oops!, Page Not Found!</h2>
          <Link to='/' className='pnf-button'>
            Go Back
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;