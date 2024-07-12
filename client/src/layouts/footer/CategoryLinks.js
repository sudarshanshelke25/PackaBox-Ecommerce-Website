import React from 'react'
import { Link } from 'react-router-dom'

const CategoryLinks = () => {
  return (
    <div className='footer-col category-links'>
        <h5 className='section-title'>
            Categories
        </h5>
        <ul className='footer-links'>
            <li>
                <Link to='/'> Electronics</Link>
            </li>
            <li>
                <Link to='/'> Fashion</Link>
            </li>
            <li>
                <Link to='/'> Home & Decore</Link>
            </li>
            <li>
                <Link to='/'> Education</Link>
            </li>
            <li>
                <Link to='/'> Packaging</Link>
            </li>
        </ul>
    </div>
  )
}

export default CategoryLinks