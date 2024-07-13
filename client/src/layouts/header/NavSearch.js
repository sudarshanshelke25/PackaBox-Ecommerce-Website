import React from 'react';
import { GoSearch } from "react-icons/go";

const NavSearch = () => {
  return (
    <>
        <div className='nav-search'>
            <input className='search-field' type="text" name="search-field" placeholder='search products here...'/>
            <button className='search-button' type="button">
            <GoSearch />
            </button>
        </div>
    </>
  );
};

export default NavSearch;