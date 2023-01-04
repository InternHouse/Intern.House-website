import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './components/App';
import Homepage from './components/Homepage';
import Rent from './components/Rent';


const root = ReactDOM.createRoot(
    document.getElementById("root")
);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/homepage",
          element: <Homepage />
        }
      ],
    },
]);

root.render (
    <RouterProvider router={router} />
);