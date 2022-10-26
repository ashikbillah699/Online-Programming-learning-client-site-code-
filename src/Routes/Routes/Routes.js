import { createBrowserRouter } from "react-router-dom";
import Main from "../../leyout/Main";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/Home/CoursesDetails/CoursesDetails";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/course/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
        ]
    }
])