import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../styles/navbar.scss';

const Navbar = () => {
    return(
        <nav id='navbar'>
            <h1 id='title'>Intern.House</h1>
            <section id='links'>
                <nav className='nav-links'>Testimonials</nav>
                <nav className='nav-links'>About</nav>
                <Link to='/rent' className='nav-links'>Rent</Link>
            </section>
        </nav>
    )
}

export default Navbar;
