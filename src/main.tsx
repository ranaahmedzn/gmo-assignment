import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import FirstPage from './pages/FirstPage/FirstPage.tsx';
import PrivateRoute from './routes/PrivateRoute.tsx';
import SecondPage from './pages/SecondPage/SecondPage.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/second-page",
    element: <PrivateRoute><SecondPage /></PrivateRoute>,
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
