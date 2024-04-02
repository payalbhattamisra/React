import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
//use Outlet when top (header here) and bottom (here router) part print as it is in every new page and only in between content part change
function Layout() {
  return (
    < >
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
