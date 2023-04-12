import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Banner from './Components/BanerSection/Banner';
import Statistics from './Components/Statistics/Statistics';
import JobDetails from './Components/JobDetails/JobDetails';
import Blog from './Components/Blog/Blog';
import ApplyJob from './Components/ApplyJOb/ApplyJob';
import { jobDataLoader } from './Loader/GetCart_JobData';
import ErrorPage from './Components/ErroPage/ErrorPage';







const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/home',
        element:<Banner></Banner>,
        loader:  ()=>fetch('/Job-List.json')
      
      },
      {
        path:'/satatics',
        element:<Statistics></Statistics>
      },
    {
      path:"/job/:id",
      element:<JobDetails></JobDetails>,
      loader:()=>fetch(`/featuredb.json`)
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },
    {
      path:"/applyJob",
      element:<ApplyJob></ApplyJob>,
      loader:jobDataLoader
    }
   
     
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>,
)
