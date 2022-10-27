import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='fs-3 fw-semibold mt-5 mb-4 text-center'>Blog</div>
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start blog"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Question : what is cors?</div>
                        Answer : Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start blog"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Question : Why are you using firebase? What other options do you have to implement authentication?</div>
                        Answer : Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start blog"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Question : How does the private route work?</div>
                        Answer : The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start blog"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Question : What is Node? How does Node work?</div>
                        Answer : Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Blog;