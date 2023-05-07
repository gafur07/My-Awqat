import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom"
import { headerMenus } from '../../assets/data/headerMenus'

const Header = () => {
  return (
    <>
      <div className='w-full px-[10%] py-[20px] shadow-md bg-white z-50 sticky top-0 flex items-center justify-between'>
          <h1 className='logo text-slate-600 text-xl font-bold uppercase'>
          My <span className='text-red-800'>Awqat</span>
          </h1>

          <ul className='flex gap-6'>
            {headerMenus.map((menu) => (
              <li key={menu.id}>
              <Link  className="font-semibold text-slate-600 text-xl uppercase transition duration-200 hover:text-red-800" to={menu.path}>
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