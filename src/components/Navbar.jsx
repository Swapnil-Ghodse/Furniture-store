import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import {NavLinks} from './index';
import { useEffect, useState } from 'react';



function Navbar() {

  const themes = {light : 'pastel', dark : 'forest' }

  const getThemeFromLocalStorage = () =>{
    return localStorage.getItem('theme') || themes.dark;
  }
  const [theme, setTheme] = useState(getThemeFromLocalStorage);

  const handleTheme = () =>{
    const newTheme = theme === 'forest' ? themes.light : themes.dark;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

  }, [theme]);

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-elements'>
        <div className='navbar-start'>
          {/* Title */}
          <NavLink to={'/'} className='hidden lg:flex btn btn-primary text-3xl items-center'>
            Furniture Store
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden '>
              <FaBarsStaggered className='h-6 w-6'/>
            </label>
            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-13 z[1] p-2 shadow bg-base-200'>
              <NavLinks/>
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'> 
          <ul className='menu menu-horizontal'>
            <NavLinks />             
          </ul>
          </div>
        <div className='navbar-end'>
          {/* Theme setup */}
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            {/* Sun Icon */}
            <BsSunFill className='swap swap-on h-4 w-4' />
            {/* Moon Icon */}
            <BsMoonFill className='swap swap-off h-4 w-4' />
          </label>
          {/* Cart Link */}
          <NavLink to={'/cart'} className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                88  
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar