import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Homee.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitInfoLoader } from './components/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     //top level elm bcz inside nesting happens,
//     element:<Layout/>,
//      children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//      ]
//   }
// ])

///about/payal
const router=createBrowserRouter(
  createRoutesFromElements(
   < Route path='/' element={<Layout />} >
     < Route path='' element={<Home />} />
     < Route path='about' element={<About />} >
      <Route path='payal'/>

      </Route>
      <Route />
     < Route path='contact' element={<Contact />} />
     < Route path='user/:userid' element={<User />} />
     < Route 
     loader={gitInfoLoader}
     //used for directly call api and also for optimization ..like when you just hover the mause to github then direct it fetch and when you click it shown ..not taking few seconds also.lag nahin hoga
     path='github' 
     element={<Github />} 
     />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>,
)
