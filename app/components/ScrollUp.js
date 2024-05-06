"use client"

import { useEffect, useState } from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

const ScrollUp = () => {
    const [buttonDisplay, setButtonDisplay] = useState('hidden')

    useEffect(() => {
        const scrollToTopButton = document.getElementById('scrollToTopButton');

        const handleScroll = () => {
          if (scrollToTopButton) {
            if (window.scrollY > 200) {
                setButtonDisplay('fixed');
            } else {
                setButtonDisplay('hidden');
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    },[])

  return (
    <div 
    id='scrollToTopButton'
    onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })}
    className={`${buttonDisplay} bottom-0 right-0 p-5 text-5xl text-yellow-300 cursor-pointer`}
    >
        <BsFillArrowUpSquareFill className='shadow-lg' />
    </div>
  )
}

export default ScrollUp