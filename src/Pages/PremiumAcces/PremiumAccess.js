import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactToPdf from 'react-to-pdf';
import './PremiumAcces.css';
import { FaDownload } from 'react-icons/fa';


const PremiumAccess = () => {
    const ref = React.createRef();

    const course = useLoaderData();
    const { name, details, course_moderator, time, Limit, release_date, courses_fee } = course;
    return (
        <Card className='addmition' ref={ref}>
            <Card.Header className='border-0 text-center fs-3 fw-semibold'>
                <span className='pe-5'>Online Programming Learning</span>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <button className='rounded-circle' onClick={toPdf}><FaDownload></FaDownload></button>
                    )}
                </ReactToPdf>
            </Card.Header>
            <Card.Body>
                <Card.Title className="text-center">{name}</Card.Title>
                <Card.Text>
                    <b>Course Features :</b> {details}
                </Card.Text>
                <Card.Text>
                    <b>Course_Moderator :</b> {course_moderator}
                </Card.Text>
                <Card.Text>
                    <b>Course Time :</b> {time}
                </Card.Text>
                <Card.Text>
                    <b>Seat Limit :</b> {Limit}
                </Card.Text>
                <Card.Text>
                    <b>Release Date :</b> {release_date}
                </Card.Text>
                <Card.Text>
                    <b>Courses Fee :</b> {courses_fee}
                </Card.Text>
                <Card.Text className="text-center">
                    <Button variant="primary">Addmission</Button>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted text-center">This course can be your bright future.</Card.Footer>
        </Card>
    );
};

export default PremiumAccess;