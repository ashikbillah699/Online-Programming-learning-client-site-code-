import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { creatUser } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);

    const handleAccept = event => {
        setAccept(event.target.checked)
    }

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    return (
        <Form onSubmit={handleRegister} className='mt-5'>
            <span className='fs-4 fw-semibold'>Registation</span>
            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <Form.Label className='fs-5 fw-semibold'>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fs-5 fw-semibold'>Photo URL</Form.Label>
                <Form.Control name="photoUrl" type="text" placeholder=" Enter PhotoUrl" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" onClick={handleAccept} label={<>Accept <Link to='/register'>terms abd conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;