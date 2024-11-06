import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css';
import App from './App';
import Create from './Components/Create/create'
import Delete from './Components/Delete/delete'
import Login from './Components/Login/login'
import Report from './Components/Report/report'
import Update from './Components/Update/update'
import ErrorPage from './Components/errorPage/errorPage'
import SideBar from './Components/SideBar/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<SideBar/>,<Create/>)
  },
  {
    path: "/Create",
    element: <Create/>,
  },
  {
    path: "/Delete",
    element: <Delete/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Report",
    element: <Report/>,
  },
  {
    path: "/Update",
    element: <Update/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



