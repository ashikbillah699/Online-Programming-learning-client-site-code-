import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/banner/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='header' expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className='logo' src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Brand className='text-dark fw-bold fs-3' href="#home">OnLine Programming Lerning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none text-dark pe-3' to="/">Home</Link>
                        <Link className='text-decoration-none text-dark pe-3' to="/">Courses</Link>
                        <Link className='text-decoration-none text-dark pe-3' href="/blog">Blog</Link>
                        <Link className='text-decoration-none text-dark pe-3' href="/faq">FAQ</Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="dark">Dark</Button>
            </Container>
        </Navbar>
    );
};

export default Header;