import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/hero.scss';

const internPic = require('../../assets/intern-pic.png')

const Hero = () => {
    return(
        <div id='hero-body'>
            <section id='right-hero'>
                <img id='intern-pic' src={internPic.default} alt='Happy interns'></img>
            </section>
            <section id='left-hero'>
                <section id='title-block'>
                    <h1 id='hero-text'>Find your home away from home</h1>
                    <Link id='title'
                        activeClass="active"
                        to="carousel-layout"
                        offset={-65}
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <button id='rental-button'>Explore our rentals for interns</button>
                    </Link>
                    
                </section>
            </section>
        </div>
    );
}


export default Hero;