"use client"

import React, { useContext } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div 
        className={`cursor-pointer text-2xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}
        onClick={toggleTheme}
    >
        {
            theme === 'light' ? <BiSun /> : <BiMoon />
        }
    </div>
  )
}

export default ThemeToggler