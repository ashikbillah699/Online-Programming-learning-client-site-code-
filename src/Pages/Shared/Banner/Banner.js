import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'
import Banner1 from '../../../assets/banner/bannerNew2.jpg'
import Banner2 from '../../../assets/banner/bannerNew3.jpg'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    style={{ height: '370px' }}
                    className="d-block w-100 banner-img"
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <ButtonGroup vertical>
                        <h3 className='mb-5 text-dark'>Online Programming Learning</h3>
                        <Button className='mb-2' variant="outline-dark">dark</Button>
                        <Button className='mb-2' variant="outline-dark">dark</Button>
                    </ButtonGroup>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '370px' }}
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='mt-auto'>
                    <ButtonGroup vertical>
                        <h3 className='mb-5 text-dark'>Online Programming Learning</h3>
                        <Button className='mb-2' variant="outline-dark">dark</Button>
                        <Button className='mb-2' variant="outline-dark">dark</Button>
                    </ButtonGroup>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;