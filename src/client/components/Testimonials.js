import React from 'react';
import '../styles/testimonials.scss';
import TestimonialCard from './TestimonialCards'

const bryan = require('../../assets/bryanHeadshot.png');
const shahriyar = require('../../assets/shahriyarHeadshot.png');
const grant = require('../../assets/grantHeadshot-min.png');

const testimonialInfo = [
    {
        key: 'bryan',
        photo: bryan,
        text: '“Renting with Intern.House was extremely easy and stress-free. The Intern.House team are super responsive and do their best to accommodate any requests. I would highly recommend staying here if you have an internship at the Tesla factory.”',
        name: 'Bryan Poon, Tesla Intern Fall 2022, Cottingham House'
    },
    {
        key: 'shahriyar',
        photo: shahriyar,
        text: '“The Intern.House team were extremely responsive during my stay, our house wanted an extra garage fridge and they had one there within 2 days.”',
        name: 'Shahriyar Al Mamun, Tesla Intern Fall 2022, Tai Londo House'
    },
    {
        key: 'grant',
        photo: grant,
        text: '“The best part about internships are the people. This is a great way to meet amazing people in a new environment. I loved my time here and highly recommend an intern house.”',
        name: 'Grant Ballard, Tesla Intern Spring 2022, Cottingham House & Tesla Full Time Spring 2023, Tai Londo House'
    }
];

const testCards = testimonialInfo.map((obj) =>
        <TestimonialCard key={obj.key} photo={obj.photo} text={obj.text} name={obj.name} />
    );

const Testimonials = () => {
    return(
        <div id='testimonials-layout'>
            <h1 id='testimonials-title'>Testimonials</h1>
            <div id='card-layout'>
                {testCards}
            </div>
        </div>
    );
}


export default Testimonials;