import React from 'react';

const NavSearch = () => {
  return (
    <>
        <div className='nav-search'>
            <input className='search-field' type="text" name="search-field" placeholder='search products here...'/>
            <button className='search-button' type="button">
              Search
            </button>
        </div>
    </>
  );
};

export default NavSearch;