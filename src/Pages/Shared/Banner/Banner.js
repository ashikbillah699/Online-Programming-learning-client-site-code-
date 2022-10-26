import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'
import Banner1 from '../../../assets/banner/bannerNew2.jpg'
import Banner2 from '../../../assets/banner/bannerNew3.jpg'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Banner = () => {
    const { googleLoging } = useContext(AuthContext)

    const provider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        googleLoging(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <Carousel fade className='d-none d-lg-block mb-3'>
            <Carousel.Item>
                <img
                    style={{ height: '370px' }}
                    className="d-block w-100 banner-img"
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <ButtonGroup vertical>
                        <h1 className='mb-5 text-dark fst-italic fs-1'>Online Programming Learning</h1>
                        <Button className='mb-2 ms-5' style={{ width: '400px' }} variant="outline-dark"><FaGoogle></FaGoogle> Login with google</Button>
                        <Button className='mb-2 ms-5' style={{ width: '400px' }} variant="outline-dark"><FaGithub></FaGithub> Login with github</Button>
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
                        <h1 className='mb-5 text-dark fst-italic fs-1'>Online Programming Learning</h1>
                        <Button onClick={handleGoogleLogin} className='mb-2 ms-5' style={{ width: '400px' }} variant="outline-dark"><FaGoogle></FaGoogle> Login with google</Button>
                        <Button className='mb-2 ms-5' style={{ width: '400px' }} variant="outline-dark"><FaGithub></FaGithub> Login with github</Button>
                    </ButtonGroup>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;