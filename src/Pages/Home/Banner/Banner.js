import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banners/banner-1.jpg'
import banner2 from '../../../images/banners/banner-2.jpg'
import banner3 from '../../../images/banners/banner-3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '80vh' }}
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '80vh' }}
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '80vh' }}
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;