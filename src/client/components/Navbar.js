import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';
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
                        <motion.p 
                            className='p-text'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }}
                        >
                            Rent
                        </motion.p>
                    </Link>
                    <Link
                        className='nav-links'
                        activeClass="active"
                        to="details-layout"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <motion.p 
                            className='p-text'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }}
                        >
                            Details
                        </motion.p>
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
                        <motion.img 
                        className='p-text'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        whileInView={{ opacity: 1 }}
                        src={navLogo.default} 
                        id='nav-logo'></motion.img>
                    </Link> 
                </section>
            <section id='right-nav' className='links'>
                <Link
                    className='nav-links'
                    activeClass="active"
                    offset={-70}
                    to="testimonials-layout"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <motion.p 
                        className='p-text'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        whileInView={{ opacity: 1 }}
                    >
                        Testimonials
                    </motion.p>
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
                    <motion.p 
                        className='p-text'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        whileInView={{ opacity: 1 }}
                    >
                        About Us
                    </motion.p>
                </Link>
                
            </section>
        </nav>
    )
}

export default Navbar;
