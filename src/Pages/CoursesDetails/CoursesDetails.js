import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const courses = useLoaderData();
    return (
        // <div>
        //     this is ditails
        // </div>
        <Card className='course'>
            <Card.Header className='fs-4 fw-semibold course-header'>{courses.name}</Card.Header>
            <Card.Body className='course'>
                <Card.Img className='course-img mb-3' src={courses.image} />
                <Card.Text>
                    <h4>Course Moderator : {courses.course_moderator}</h4>
                </Card.Text>
                <Card.Text>
                    <h5 className='fw-semibold'>Full Course : {courses.time}</h5>
                </Card.Text>
                <Card.Text>
                    {courses.details}
                </Card.Text>
                <Card.Text>
                    <h5 className=''> Seats : {courses.Limit}</h5>
                </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
};

export default CoursesDetails;