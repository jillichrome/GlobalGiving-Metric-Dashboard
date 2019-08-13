import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>GlobalGiving Metrics</Link>
      </div>
    </div>
  )
}

export default NavBar;
