import React from 'react';

const SearchBar = () => {
  return (
    <>
        <div className='nav-search'>
            <input className='search-field' type="text" name="search-field" placeholder='type here to search products...'/>
            <button className='search-button' type="button">
              Search
            </button>
        </div>
    </>
  );
};

export default SearchBar;