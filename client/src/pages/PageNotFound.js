import React from 'react'
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Layout>
      <div className='pnf'>
        <div className='pnf-container'>
          <h1 className='pnf-title'>404</h1>
          <h2 className='pnf-heading'>Oops!, Page Not Found!</h2>
          <Link to='/' className='pnf-button'>
            Go Back
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;