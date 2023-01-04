import React from 'react';
import Hero from './Hero';
import Details from './details/Details'
import CarouselBlock from './CarouselBlock';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import { scroller, Element } from "react-scroll";


const Homepage = () => {
    return (
        <div>
            <Hero />
            <Details />
            <CarouselBlock />
            <Testimonials />
            <AboutUs />
        </div>
    );
}


export default Homepage;