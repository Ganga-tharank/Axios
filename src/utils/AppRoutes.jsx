import React from 'react'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Edit from '../components/Edit'
import Create from '../components/Create'
import { Navigate } from 'react-router-dom'


const AppRoutes = [
  {
    path: "/",
    element:<Home/>,
    exact: true,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    exact: true,
  },
  {
    path: "/create",
    element: <Create />,
    exact: true,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
    exact: true,
  },
  {
    path: "*",
    element: <Navigate to= '/' />,
    exact: false
  }
];

export default AppRoutes