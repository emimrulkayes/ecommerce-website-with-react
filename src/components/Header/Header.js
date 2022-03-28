import React from 'react';
import logo from '../../asssts/images/Logo.svg'

const Header = () => {
    return (
        <header className='header-area py-2'>
            <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                    <div className="siteLogo">
                        <a href='/home'> <img src={logo} alt='Nav Brand' /> </a>
                    </div>

                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='/_blanknavbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='nav-menu collapse navbar-collapse' id='navbarNavDropdown'>
                        <ul className='navbar-nav ms-auto'>
                            <li><a className='active' href='/home'>Home</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/products'>Products</a></li>
                            <li><a href='/services'>Services</a></li>
                            <li><a href='/blogs'>Blogs</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
   );
};

export default Header;