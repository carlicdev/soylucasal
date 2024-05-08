"use client"

import { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full card py-2 fixed top-0 z-20 shadow'>
        <div className='max-w-7xl w-full mx-auto flex px-2 lg:px-0'>
            <div className='flex gap-4 items-center ml-0 mr-auto'>
                <Link href='/'>
                    <Logo />
                </Link>
                <div className='hidden lg:flex gap-4 ml-10'>
                    <Link href={'/blog'}>
                        <p className='text-2xl tracking-wide'>Blog</p>
                    </Link>
                    <Link href={'/guias'}>
                        <p className='text-2xl tracking-wide'>Guías</p>
                    </Link>
                    <Link href={'/cursos'}>
                        <p className='text-2xl tracking-wide'>Cursos</p>
                    </Link>
                    <Link href={'/libros'}>
                        <p className='text-2xl tracking-wide'>Libros</p>
                    </Link>
                </div>
            </div>

            <div className='mr-0 ml-auto flex gap-4 items-center'>
                <Link href={'#contact'}>
                    <button className='hidden lg:block px-7 py-3 bg-yellow-300 hover:bg-yellow-400 hover:scale-105 rounded-lg text-2xl text-black'>
                        Contacto
                    </button>
                </Link>
                <ThemeToggler />
                <div 
                    onClick={() => setIsOpen(!isOpen)}
                    className='lg:hidden hover:scale-110 transition-all duration-300 text-3xl cursor-pointer '>
                    {
                        !isOpen ? 
                        <span className='text-3xl  cursor-pointer'>
                            <AiOutlineMenu />
                        </span> : null
                    }
                </div>
            </div>


        </div>


        <div className={`animated-box ${isOpen ? 'open' : 'closed'} card absolute top-0 w-full z-20`}>
                    <div className='relative w-full'>
                        <button 
                            className='absolute top-4 right-4 text-red-400 text-4xl'
                            onClick={() => setIsOpen(!isOpen)}    
                        >
                        <AiOutlineCloseCircle />
                        </button>
                    </div>
                    <div className='flex flex-col h-full content-center px-5'>
                        <div className='container max-w-xs justify-text mx-auto mt-5'>
                            <Link href='/blog' onClick={() => setIsOpen(!isOpen)} >
                                <p className='font-black text-3xl mb-5 mx-auto'>Blog</p>
                            </Link>
                            <Link href='/guias' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-black text-3xl mb-5 mx-auto'>Guías</p>
                            </Link>
                            <Link href='/cursos' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-black text-3xl mb-5 mx-auto'>Cursos</p>
                            </Link>
                            <Link href='/libros' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-black text-3xl mb-5 mx-auto'>Libros</p>
                            </Link>
                            <Link href='/about' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-black text-3xl mb-5 mx-auto'>About</p>
                            </Link>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Navbar