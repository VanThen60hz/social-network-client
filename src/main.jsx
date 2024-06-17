import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./Redux/store.js";
import "./index.css";
import routes from "./router/routers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <ThemeProvider theme={DarkTheme}>
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    </React.StrictMode>,
    // </ThemeProvider>,
);
