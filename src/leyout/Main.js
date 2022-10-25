import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Shared/Banner/Banner';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container className='main-container'>
                <Row>
                    <Col lg={"4"}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={"8"}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;