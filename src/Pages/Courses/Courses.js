import React from 'react';
import './Courses.css';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../Shared/courseCart/CourseCart';

const Courses = () => {
    const courses = useLoaderData([])
    // console.log(courses)
    return (
        <div>
            {
                courses.map(course => <CourseCart
                    key={course.id}
                    course={course}
                ></CourseCart>)
            }

        </div>
    );
};

export default Courses;