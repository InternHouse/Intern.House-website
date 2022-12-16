import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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
                    <Link to='/rent'>
                        <button id='rental-button'>Explore our rentals for interns</button>
                    </Link>
                    
                </section>
            </section>
        </div>
    );
}


export default Hero;