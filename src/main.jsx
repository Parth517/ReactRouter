import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'

import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider }from 'react-router-dom'
import Home from './Components/home/Home.jsx'
import About from './Components/about/About.jsx'
import Contact from './Components/contact/Contact.jsx'
import User from './Components/user/User.jsx'
import Github from './Components/github/Github.jsx'

 const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/' element={<User />}>
        <Route path=":userId" element={<User />}/>
      </Route>
      <Route path="github" element={<Github />}/>
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
