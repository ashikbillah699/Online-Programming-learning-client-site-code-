import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css';

const LeftNav = () => {
    const [allCourses, setSllCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setSllCourses(data))
    }, [])

    return (
        <div className='left-nav'>
            <h3 className='fw-semibold my-5'>OUR COURSES : {allCourses.length}</h3>
            <div className=' '>
                {
                    allCourses.map(course => <div key={course.id}>
                        <Link className='course-name d-block fs-4' to={`/course/${course.id}`}>{course.name}</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftNav;