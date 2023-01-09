import React, { useState } from 'react';
import '../styles/carousel.scss';
import { ButtonBack, ButtonNext,
    CarouselProvider, Image, ImageWithZoom, Slide, Slider, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { motion } from 'framer-motion';

const cottingham = require('../../assets/carouselImages/cottingham.png')
const brocade = require('../../assets/carouselImages/brocade.jpg');
const taiLondo = require('../../assets/carouselImages/taiLondo.jpg');
const sabal = require('../../assets/carouselImages/sabal.jpg');

const rentInfo = [
    {
        houseName: 'Cottingham',
        bedBath: '5 beds, 2.5 baths',
        // tour: 
    },
    {
        houseName: 'Brocade',
        bedBath: '5 beds, 3 baths',
        tour: 'https://www.virtuance.com/listing/5904-brocade-drive-austin-texas'
    },
    {
        houseName: 'Tai Londo',
        bedBath: '5 beds, 3 baths',
        tour: 'https://www.virtuance.com/listing/13500-tai-londo-drive-austin-texas'
    },
    {
        houseName: 'Sabal Palm',
        bedBath: '4 beds, 2.5 baths',
        tour: 'https://www.virtuance.com/listing/15104-sabal-palm-road-austin-texas'
    }
];

const CarouselSection = () => {

    const [index, setIndex] = useState(0);
    const length = 4;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div id='carousel-layout'>
            <h1 id='carousel-title'>Intern Houses in Austin, TX</h1>
            <CarouselProvider
                id='carousel'
                totalSlides={4}
                infinite
                visibleSlides={1}
                hasMasterSpinner
                naturalSlideWidth={100}
                naturalSlideHeight={60}    
            >
                <div id='sliders' style={{position:'relative'}}>
                    <Slider>
                        <Slide index={0}>
                            <Image src={cottingham.default} className='carousel-image' style={{height:'300px', width:'auto'}} />
                        </Slide>
                        <Slide index={1}>
                            <Image src={brocade.default} className='carousel-image'  style={{height:'300px', width:'auto'}} />
                        </Slide>
                        <Slide index={2}>
                            <Image src={taiLondo.default} className='carousel-image'  style={{height:'300px', width:'auto'}}/>
                        </Slide>
                        <Slide index={3}>
                            <Image src={sabal.default} className='carousel-image' style={{height:'300px', width:'auto'}}/>
                        </Slide>
                    </Slider>
                    <ButtonBack onClick={handlePrevious} id='button-back' className='arrows'><i className="bi bi-arrow-left-circle-fill"></i></ButtonBack>
                    <ButtonNext onClick={handleNext} id='button-next' className='arrows'><i className="bi bi-arrow-right-circle-fill"></i></ButtonNext>
                    <DotGroup />
                </div>
            </CarouselProvider>

            <section id='carousel-title-section'>
                <h2 id='carousel-house-title'>
                    {rentInfo[index].houseName}
                </h2>
                <h3 id='carousel-bed-bath'>
                    {rentInfo[index].bedBath}
                </h3>
            </section>
            <section id='carousel-button-section'>
                <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }} id='3d-tour-button' className='carousel-button' href={rentInfo[index].tour} target='_blank'>3D Tour</motion.a>
                <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }} id='apply-button' className='carousel-button' href='https://my.innago.com/a/B6a2HUbH71b' target='_blank'>Apply</motion.a>
            </section>
        </div>
    );
}


export default CarouselSection;