import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/navbar.scss';

const Navbar = () => {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.height = "60px";
        // document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.height = "12vh";
        // document.getElementById("logo").style.fontSize = "35px";
    }
    }

    return(
        <nav id='navbar'>
            <Link
                id='title'
                activeClass="active"
                to="hero-body"
                offset={-300}
                spy={true}
                smooth={true}
                duration={500}
            >
                Intern.House
            </Link>
            <section id='links'>
                <Link
                    className='nav-links'
                    activeClass="active"
                    to="carousel-layout"
                    offset={-65}
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Rent
                </Link>
                <Link
                    className='nav-links'
                    activeClass="active"
                    offset={-60}
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
                    offset={-60}
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
