import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./component/Error.jsx";
import Home from "./component/Home.jsx";
import Root from "./component/Root.jsx";
import Register from "./component/Register.jsx";
import Log_in from "./component/Log_in.jsx";
import Authprovaider from "./Provaider/Authprovaider.jsx";
import Order from "./component/Order.jsx";
import Privetrauts from "./component/Privetrauts.jsx";
import Profile from "./component/Profile.jsx";



const router = createBrowserRouter([
  {
    path: "/",

    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Log_in></Log_in>,
      },
      {
        path:'/order',
        element:<Privetrauts><Order></Order></Privetrauts>
      },
      {
        path:'/profile',
        element:<Privetrauts><Profile></Profile></Privetrauts>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovaider>
      <RouterProvider router={router} />
    </Authprovaider>
    {/* <App /> */}
  </React.StrictMode>
);
