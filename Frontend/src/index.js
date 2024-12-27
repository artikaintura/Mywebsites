import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project from './components/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/resume",
        element:<Resume />
      },

      {
        path:"/project",
        element:<Project />
      },
      {
        path:"/contact",
        element:<Contact />
      },

    ]
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

