import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [allCourses, setSllCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/course_details')
            .then(res => res.json())
            .then(data => setSllCourses(data))
    }, [])

    return (
        <div>
            <h4>Total courses : {allCourses.length}</h4>
            {
                allCourses.map(course => <div key={course.course_id}>
                    <Link to={`/courses/${course.course_id}`}>{course.course_name}</Link>
                </div>)
            }
        </div>
    );
};

export default LeftNav;