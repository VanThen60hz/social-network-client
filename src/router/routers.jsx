import { Navigate, createBrowserRouter } from "react-router-dom";
import LayOut from "../layout/Layout";
import Home from "../pages/Home/Home";
import Authentication from "../pages/Authentication/Authentication";
import Message from "../pages/Messages/Message";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" />,
    },
    {
        path: "*",
        element: <Authentication />,
    },
    {
        path: "",
        element: <LayOut />,
        errorElement: <div>404</div>,
        children: [
            {
                path: "/hello",
                element: <div>Hello world!</div>,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "message",
                element: <Message />,
            },
        ],
    },
]);

export default routes;
