import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom"
import { headerMenus } from '../../assets/data/headerMenus'

const Header = () => {
  return (
    <>
      <div className='w-full px-[10%] py-[20px] shadow-md bg-white z-50 sticky top-0 flex items-center justify-between'>
          <Link to={"/"}>
            <h1 className='logo text-[#130f40] text-xl font-bold cursor-pointer flex items-center gap-2'>Food
              <span className='text-[#ff7800] text-[24px]'><i className='bx bxs-basket'></i></span> 
            </h1>
          </Link> 
          <ul className='flex gap-6'>
            {headerMenus.map((menu) => (
              <li key={menu.id}>
              <Link  className="text-[#130f40] text-[18px] transition duration-200 hover:text-[#ff7800]" to={menu.path}>
                {menu.label}
              </Link>

              </li>
            ))}
          </ul>
      </div>
    </>
  )
}

export default Header