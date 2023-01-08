import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/navbar.scss';

const navLogo = require('../../assets/navLogo.png')

const Navbar = () => {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("navbar").style.height = "60px";
        document.getElementById("nav-logo").style.height = "50px";
        // document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.height = "12vh";
        document.getElementById("nav-logo").style.height = "10vh";
        // document.getElementById("logo").style.fontSize = "35px";
    }
    }

    return(
        <nav id='navbar'>
                <section id='left-nav' className='links'>
                    <Link
                        className='nav-links'
                        activeClass="active"
                        to="carousel-layout"
                        offset={-110}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Rent
                    </Link>
                    <Link
                        className='nav-links'
                        activeClass="active"
                        to="details-layout"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Details
                    </Link>
                </section>
                <section className='links'>
                    <Link
                        id='title'
                        activeClass="active"
                        to="hero-body"
                        offset={-300}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <img src={navLogo.default} id='nav-logo'></img>
                    </Link> 
                </section>
            <section id='right-nav' className='links'>
                <Link
                    className='nav-links'
                    activeClass="active"
                    offset={-110}
                    to="testimonials-layout"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Testimonials
                </Link>
                <Link
                    className='nav-links'
                    activeClass="active"
                    to="about-us-layout"
                    offset={-110}
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    About
                </Link>
                
            </section>
        </nav>
    )
}

export default Navbar;
