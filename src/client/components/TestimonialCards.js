import React from 'react';
import '../styles/testimonials.scss';

const profPic = require('../../assets/pic-default.jpeg')

const TestimonialCard = () => {
    return(
        <div id='testimonial-card-layout'>
            <img id='testimonial-pic' src={profPic.default}></img>
            <section id='card'>
                <p id='testimonial-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque dignissim.
                </p>
                <p id='name'>- Gavin</p>
            </section>
        </div>
    );
}


export default TestimonialCard;