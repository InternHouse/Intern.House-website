import React, { useState } from 'react';
import '../styles/carousel.scss';
import { ButtonBack, ButtonNext,
    CarouselProvider, Image, ImageWithZoom, Slide, Slider, DotGroup } from 'pure-react-carousel';

const cottingham = require('../../assets/carouselImages/house-placeholder.png')
const brocade = require('../../assets/carouselImages/brocade.png');
const taiLondo = require('../../assets/carouselImages/taiLondo.png');
const sabal = require('../../assets/carouselImages/sabal.png');

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
        bedBath: '4 beds, 3 baths',
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
                visibleSlides={1}
                totalSlides={4}
                step={1}
                naturalSlideWidth={400}
                naturalSlideHeight={500}
                infinite
                hasMasterSpinner
            >
                <div id='sliders'>
                    <Slider>
                        <Slide index={0}>
                            <ImageWithZoom src={cottingham.default} />
                        </Slide>
                        <Slide index={1}>
                            <ImageWithZoom src={brocade.default} />
                        </Slide>
                        <Slide index={2}>
                            <ImageWithZoom src={taiLondo.default} />
                        </Slide>
                        <Slide index={3}>
                            <ImageWithZoom src={sabal.default} />
                        </Slide>
                    </Slider>
                    <div>
                        <ButtonBack onClick={handlePrevious} className='slider-btns'>Back</ButtonBack>
                        <ButtonNext onClick={handleNext} className='slider-btns'>Next</ButtonNext>
                    </div>
                    <DotGroup style={{textAlign:'center'}}/>
                </div>
            </CarouselProvider>

                {/* <CarouselProvider
                    id='carousel'
                    visibleSlides={1}
                    totalSlides={4}
                    step={1}
                    naturalSlideWidth={400}
                    naturalSlideHeight={500}  
                    isIntrinsicHeight  
                    infinite
                    hasMasterSpinner
                >
                    <div style={{position:'relative'}}>
                       <Slider>
                            <Slide index={0}>
                                <Image src={cottingham} style={{height:'200px', width:'auto'}}/>
                            </Slide>
                            <Slide index={1}>
                                <Image src={brocade} style={{height:'200px', width:'auto'}}/>
                            </Slide>
                            <Slide index={2}>
                                <Image src={taiLondo} style={{height:'200px', width:'auto'}} />
                            </Slide>
                            <Slide index={3} style={{height:'200px', width:'auto'}}>
                                <Image src={sabal}  style={{height:'200px', width:'auto'}}/>
                            </Slide>
                        </Slider>
                    </div>
                    <ButtonBack onClick={handlePrevious} className='slider-btns'>Back</ButtonBack>
                    <ButtonNext onClick={handleNext} className='slider-btns'>Next</ButtonNext>
                </CarouselProvider> */}
            <section id='carousel-title-section'>
                <h2 id='carousel-house-title'>
                    {rentInfo[index].houseName}
                </h2>
                <h3 id='carousel-bed-bath'>
                    {rentInfo[index].bedBath}
                </h3>
            </section>
            <section id='carousel-button-section'>
                <a id='3d-tour-button' className='carousel-button' href={rentInfo[index].tour} target='_blank'>3D Tour</a>
                <a id='apply-button' className='carousel-button'>Apply</a>
            </section>
        </div>
    );
}


export default CarouselSection;