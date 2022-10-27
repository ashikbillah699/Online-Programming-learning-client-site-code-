import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Blog = () => {
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Question : what is cors?</div>
                    Answer :
                </div>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Question : Why are you using firebase? What other options do you have to implement authentication?</div>
                    Answer :
                </div>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Question : How does the private route work?</div>
                    Answer :
                </div>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Question : What is Node? How does Node work?</div>
                    Answer :
                </div>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default Blog;