import { createBrowserRouter } from "react-router-dom";
import MiddlePart from "../components/MiddlePart/MiddlePart";
import CreateReelsForm from "../components/Reels/CreateReelsForm";
import Reels from "../components/Reels/Reels";
import LayOut from "../layout/Layout";
import Authentication from "../pages/Authentication/Authentication";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home/Home";
import Message from "../pages/Messages/Message";
import Profile from "../pages/Profile/Profile";

const routes = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Navigate to="/login" />,
    // },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "",
                element: <MiddlePart />,
            },
            {
                path: "reels",
                element: <Reels />,
            },
            {
                path: "create-reels",
                element: <CreateReelsForm />,
            },
            {
                path: "profile/:id",
                element: <Profile />,
            },
        ],
    },
    {
        path: "/",
        element: <Authentication />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "*",
                element: <p className="text-center">Some thing went wrong</p>,
            },
        ],
    },
    {
        path: "/",
        element: <LayOut />,
        errorElement: <div>404</div>,
        children: [
            {
                path: "hello",
                element: <div>Hello world!</div>,
            },
            {
                path: "message",
                element: <Message />,
            },
        ],
    },
]);

export default routes;
