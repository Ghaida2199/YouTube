import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Homepage from './Pages/Homepage.jsx'
import Video from './Pages/Video.jsx'
import Login from './Pages/Login.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "/video/:id",
    element: <Video/>
  },
  {
    path: "/Homepage",
    element: <Homepage/>
  },
]);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
