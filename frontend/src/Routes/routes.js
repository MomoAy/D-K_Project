import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute";
import App from "../App";

const router = createBrowserRouter (
    [
        {
            path: '/index',
            Component: App
        },
        {
            path: '/',
            Component: Login 
        },
        {
            path: '/register',
            Component: Register 
        }
    ]
)

export default router;