import React from 'react'
import Header from '../Header/Header'
import "./Layout.scss"
import { Outlet } from "react-router-dom"
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout