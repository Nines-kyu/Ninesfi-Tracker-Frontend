import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Dashboard from "../Pages/Dashboard/Dashboard";

import PageError from "../Features/PageError/PageError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '*', element: <PageError /> }
        ]
    }
])