import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';
import '../styles/hero.scss';
import bgImage from '../../assets/hero.jpg'
import { convertLength } from '@mui/material/styles/cssUtils';

// const internPic = ;

const Hero = () => {
    return(
        <div id='hero-body' style={{backgroundImage: `url(${bgImage})`, backgroundRepeat:"no-repeat", backgroundSize: 'cover'}}>
            {/* <section id='right-hero'>
                <img id='intern-pic' src={internPic.default} alt='Happy interns'></img>
            </section> */}
            <section id='left-hero'>
                <section id='title-block'>
                    <h1 id='hero-text'>Find your home away from home</h1>
                    <Link id='title'
                        activeClass="active"
                        to="carousel-layout"
                        offset={-115}
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }}
                            id='rental-button'>Explore our rentals for interns</motion.button>
                    </Link>
                    
                </section>
            </section>
        </div>
    );
}


export default Hero;