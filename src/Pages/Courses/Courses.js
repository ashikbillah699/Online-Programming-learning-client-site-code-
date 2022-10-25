import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Card className='course'>
            <Card.Header className='fs-4 fw-semibold course-header'>{courses.name}</Card.Header>
            <Card.Body className='course'>
                <Card.Img className='course-img mb-3' src={courses.image} />
                <Card.Text>
                    {courses.details.length > 200 ?
                        <p>{courses.details.slice(0, 200) + '...'}<Link to={`/coures_details/${courses.id}`}>Read more</Link></p> :
                        <p>{courses.details}</p>
                    }
                </Card.Text>
                <Card.Text>
                    <h5 className='fw-semibold'>Full Course : {courses.time}</h5>
                </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
};

export default Courses;