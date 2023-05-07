import React from 'react'
import Header from '../Header/Header'
import "./Layout.scss"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Layout