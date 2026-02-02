import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../Components/Landing';
import Test from '../Components/Test';

function Routing() {
  const router = createBrowserRouter([
    {
      path: "/test",
      element: <Test/>
    },
    {
      path: "/",
      element: <Landing/>
    }
    
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default Routing;