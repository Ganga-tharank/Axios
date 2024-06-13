import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
export const API_URL = "https://659e44bc47ae28b0bd3574b6.mockapi.io/users";

function App() {
  const router = createBrowserRouter(AppRoutes)
  return (
    <>
      <RouterProvider router={router} />
   </>
  )
}

export default App