import React from 'react';
import '../styles/testimonials.scss';
import TestimonialCard from './TestimonialCards'

const Testimonials = () => {
    return(
        <div id='testimonials-layout'>
            <h1 id='testimonials-title'>Testimonials</h1>
            <div id='card-layout'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    );
}


export default Testimonials;