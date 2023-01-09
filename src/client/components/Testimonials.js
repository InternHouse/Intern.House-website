import React from 'react';
import '../styles/testimonials.scss';
import TestimonialCard from './TestimonialCards'

const bryan = require('../../assets/bryanHeadshot.png');
const hannah = require('../../assets/hannah.jpeg');
const grant = require('../../assets/grantHeadshot-min.png');

const testimonialInfo = [
    {
        key: 'bryan',
        photo: bryan,
        text: '“Renting with Intern.House was extremely easy and stress-free. The Intern.House team are super responsive and do their best to accommodate any requests. I would highly recommend staying here if you have a Tesla internship.”',
        name: 'Bryan Poon',
        house: 'Tesla Intern Fall 2022, Cottingham House'
    },
    {
        key: 'hannah',
        photo: hannah,
        text: '“Living in an intern house was the best decision I could\'ve made when working at Tesla. Their team is amazingly helpful and super responsive, and living with other interns and getting a built-in friend group was so fun!”',
        name: 'Hannah Vincent',
        house: 'Tesla Intern Fall 2021, Cottingham House'
    },
    {
        key: 'grant',
        photo: grant,
        text: '“The best part about internships are the people. This is a great way to meet amazing people in a new environment. I loved my time here and highly recommend an intern house.”',
        name: 'Grant Ballard',
        house: 'Tesla Intern Spring 2022, Cottingham House & Tesla Full Time Spring 2023, Tai Londo House'
    }
];

const testCards = testimonialInfo.map((obj) =>
        <TestimonialCard key={obj.key} photo={obj.photo} text={obj.text} name={obj.name} house={obj.house} />
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