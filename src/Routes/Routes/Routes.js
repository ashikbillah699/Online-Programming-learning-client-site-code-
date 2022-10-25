import { createBrowserRouter } from "react-router-dom";
import Main from "../../leyout/Main";
import CourseDitails from "../../Pages/CourseDitails/CourseDitails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: '/coursedetails/:id',
                element: <CourseDitails></CourseDitails>
            }
        ]
    }
])