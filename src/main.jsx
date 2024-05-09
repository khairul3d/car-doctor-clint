import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Signup/Signup';
import AuthProvider from './Provider/AuthProvider';
import Chackout from './Pages/Chackout/Chackout';
import Private from './Pages/Private/Private';
import ChackoutBooking from './Pages/ChackoutBooking/ChackoutBooking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: 'chackout/:id',
        element: <Private><Chackout></Chackout></Private>,
        loader: ({params}) => fetch(`http://localhost:5000/servises/${params.id}`)
      },
      {
        path: '/booking',
        element: <Private><ChackoutBooking></ChackoutBooking></Private>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
