import React from 'react';
import '../styles/testimonials.scss';

// const profPic = require('../../assets/pic-default.jpeg')

const TestimonialCard = (props) => {
    return(
        <div id='testimonial-card-layout'> 
            <img id='testimonial-pic' src={props.photo.default}></img>
            <section id='card'>
                <p id='testimonial-text'>
                    {props.text}
                </p>
                <p id='name'>- {props.name}</p>
            </section>
        </div>
    );
}


export default TestimonialCard;