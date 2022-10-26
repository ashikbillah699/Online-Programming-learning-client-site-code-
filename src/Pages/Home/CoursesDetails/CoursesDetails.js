import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const course = useLoaderData()

    const { name, image, details, time, Limit } = course;
    return (
        <div>
            <Card className='course mt-5'>
                <Card.Header className='fs-4 fw-semibold course-header'>{name}</Card.Header>
                <Card.Body className='course'>
                    <Card.Img className='course-img mb-3' src={image} />
                    <Card.Text>
                        <span className='fs-4'>Course Moderator : {course.course_moderator}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className='fw-semibold fs-5'>Full Course : {time}</span>
                    </Card.Text>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>
                        <span className='fs-5'> Seats : {Limit}</span>
                    </Card.Text>
                    <Link to='/'> <Button variant="primary">Home</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CoursesDetails;
