import React from 'react';
import '../styles/aboutUs.scss';
import { motion } from 'framer-motion';

const brian = require('../../assets/brianHeadshot.jpeg');
const justin = require('../../assets/justinHeadshot.jpeg');

const AboutUs = () => {
    return (
        <div id='about-us-layout'>
            <h1 id='about-us-title'>About Us</h1>
            <section id='contact-section'>
                <section id='brian'>
                    <img id='brian-headshot' className='headshot' src={brian.default}></img>
                </section>
                <section id='justin'>
                    <img id='justin-headshot' className='headshot' src={justin.default}></img>
                </section>
            </section>
            <p id='about-us-text'>We’re an Austin-based startup founded by ex-interns and Austin natives. We know how it feels to move to a new city full of strangers and founded Intern.House to make that experience more friendly and straight-forward. Our houses provide a way to build an immediate friend group at your company while also not having to worry about the usual intern housing headaches of finding furnishings, unknown roommates, or complicated leases. We hope you enjoy your stay at your Intern House. Feel free to email us at <a id='email-link' href='mailto:info@intern.house'>info@intern.house</a> if you have any questions!</p>
        </div>
    );
}


export default AboutUs;