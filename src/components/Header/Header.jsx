import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom"
import { headerMenus } from '../../assets/data/headerMenus'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Header = () => {
  const { basket } = useSelector(store => store.cart)
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <div className='header w-full px-[10%] py-[20px] shadow-md bg-white z-50 sticky top-0 flex items-center justify-between'>
          <Link to={"/"}>
            <h1 className='logo text-[#130f40] text-xl font-bold cursor-pointer flex items-center gap-2'>
              <span className='text-[#ff7800] text-[24px]'><i className='bx bxs-basket'></i></span> Food
            </h1>
          </Link>
          <nav className={`${isShow ? "active" : ""}`}>
          <ul className='flex gap-6' onClick={() => setIsShow(!isShow)}>
            {headerMenus.map((menu) => (
              <li key={menu.id}>
              <Link  className="text-[#131313]  transition duration-200 hover:text-[#ff7800]" to={menu.path}>
                {menu.label}
              </Link>
              </li>
            ))}
          </ul>
          </nav>
          <div className='header-icons'>
            <div className='menu-btn'>
              <span className='icon'>
                <i onClick={() => setIsShow(!isShow)} className={`bx ${isShow ? "bx-x" : "bx-menu"}`}></i>
              </span>
            </div>
                <Link to={'/search'}>
                  <span className='icon'>
                    <i className="bx bx-search-alt-2"></i>
                  </span>
                </Link>

                <div className='basket-btn'>
                  <Link to={"/favourites"}>
                    <i className='bx bxs-star'></i>
                    <p>{basket.length}</p>
                  </Link>
                </div>
            </div>
      </div>
    </>
  )
}

export default Header