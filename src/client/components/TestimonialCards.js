import React from 'react';
import '../styles/testimonials.scss';

const TestimonialCard = (props) => {
    return(
        <div id='testimonial-card-layout'> 
            <img id='testimonial-pic' src={props.photo.default}></img>
            <section id='card'>
                <p id='testimonial-text'>
                    {props.text}
                </p>
                <hr id='line'></hr>
                <section id='test-bottom'>
                    <p id='name'>{props.name}</p>
                    <p id='house'>{props.house}</p>
                </section>
                
            </section>
        </div>
    );
}


export default TestimonialCard;