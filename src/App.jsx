import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { GithubContextProvider, GithubContext } from './context/github/GithubContext.jsx'

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "user/:username",
        element: <User />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <GithubContextProvider>
      <RouterProvider router={router} />
    </GithubContextProvider>
  )
}

export default App
