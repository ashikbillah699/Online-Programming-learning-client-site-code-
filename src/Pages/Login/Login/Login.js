import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const handlelogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    return (
        <Form onSubmit={handlelogin} className='mt-5'>
            <span className='fs-4 fw-semibold'>Login your Account</span>
            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <Form.Label className='fs-5 fw-semibold'>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fs-5 fw-semibold'>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Text className="text-danger d-block mb-4">
                {error}
            </Form.Text>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <small className='ms-3'>Please <Link to='/register'>Registation</Link></small>
        </Form>
    );
};

export default Login;