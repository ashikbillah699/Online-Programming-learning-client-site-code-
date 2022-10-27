import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/banner/logo.jpg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const haldleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='header' expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className='logo' src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Brand><Link className='text-dark text-decoration-none fw-bold fs-3' to='/'>OnLine Programming Lerning</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none text-dark pt-1 pe-3' to="/">Home</Link>
                        <Link className='text-decoration-none text-dark pt-1 pe-3' to="/">Courses</Link>
                        <Link className='text-decoration-none text-dark pt-1 pe-3' to="/blog">Blog</Link>
                        <Link className='text-decoration-none text-dark pt-1 pe-3' to="/faq">FAQ</Link>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </Nav>

                </Navbar.Collapse>
                <div className='pe-2'>
                    {
                        user?.photoURL ?
                            <Image title={user?.displayName} className='pe-1' style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image> :
                            <FaUser></FaUser>
                    }
                    {
                        user?.uid ?
                            <>
                                <span className='pe-2'> {user?.displayName}</span>
                                <Button variant="dark" onClick={haldleLogOut}>Logout</Button>
                            </> :
                            <>
                                <Button variant="info" className='me-2 ms-2 text-decoration-none'><Link className='text-dark text-decoration-none' to='/login'>Login</Link></Button>{' '}
                                <Button variant="info"><Link className='text-decoration-none text-dark' to='/register'>Register</Link></Button>{' '}

                            </>

                    }
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;