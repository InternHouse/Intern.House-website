import React from 'react';
import '../styles/carousel.scss';

const CarouselSection = () => {
    return(
        <div id='carousel-layout'>
            <h1 id='carousel-title'>Intern Houses in Austin, TX</h1>
            <section id='carousel-button-section'>
                <button id='3d-tour-button' className='carousel-button'>3D Tour</button>
                <button id='apply-button' className='carousel-button'>Apply</button>
            </section>
        </div>
    );
}


export default CarouselSection;