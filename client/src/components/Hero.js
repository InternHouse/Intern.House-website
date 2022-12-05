import React from 'react';
import '../styles/hero.scss';

const internPic = require('../../assets/intern-pic.png')

const Hero = () => {
    return (
        <div id='hero-body'>
            <section id='right-hero'>
                <img id='intern-pic' src={internPic.default} alt='Happy interns who have lived at our houses'></img>
            </section>
        </div>
    );
}


export default Hero;