import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCart = ({ course }) => {
    const { name, image, details, id } = course;
    return (
        <Card className='course mb-5'>
            <Card.Header className='fs-4 fw-semibold course-header'>{name}</Card.Header>
            <Card.Body className='course'>
                <Card.Img className='course-img mb-3' src={image} />
                <Card.Text>
                    {details.length > 200 ?
                        <>{details.slice(0, 200) + '...'}<Link to={`/course/${id}`}>Read more</Link></> :
                        <>{details}</>
                    }
                </Card.Text>
                <Link to={`/course/${id}`}><Button variant="primary">Details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default CourseCart;