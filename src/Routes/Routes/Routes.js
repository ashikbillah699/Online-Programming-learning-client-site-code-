import { createBrowserRouter } from "react-router-dom";
import Main from "../../leyout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/Home/CoursesDetails/CoursesDetails";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PremiumAccess from "../../Pages/PremiumAcces/PremiumAccess";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('https://online-programming-learning-server.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`https://online-programming-learning-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>,
                loader: ({ params }) => fetch(`https://online-programming-learning-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <div><div className="fs-1 fw-bolder text-center mt-5 pt-5">404</div><div className="fs-1 fw-bolder text-center">THIS SITE IS NOT FOUND</div></div>
            }
        ]
    }
])