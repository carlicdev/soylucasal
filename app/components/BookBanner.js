import React from 'react'
import Image from 'next/image'

const BookBanner = ({book}) => {

  return (
    <div className='w-full card p-5'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-wrap'>
            <div className='lg:w-1/2 flex flex-col justify-center items-center lg:pl-5'>
            <Image src={book.img} alt='profileImg' width={40} height={40} className="w-[300px]"/>
            </div>
                <div className='lg:w-1/2 flex flex-col justify-center items-center lg:pl-5'>
                    <p className='text-4xl text-special tracking-wide font-bold mb-2'>{book.title}</p>
                    <div className='w-full flex gap-2 items-center justify-center'>
                        <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center'>
                            <Image src={'/man.png'} alt='profileImg' width={40} height={40} className="rounded-full"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-medium tracking-tight">{book.author}</p>
                        </div>
                    </div>
                    <p className='text-justify mt-10 text-lg mb-10'>{book.desc}</p>
                    <div>

                        {
                            book.published ?
                    <div className='flex items-center justify-center gap-5'>
                            
                            <button className='px-7 py-5 bg-blue-800 rounded-lg text-2xl text-white'>
                                {
                                    book.price === 0 ? 'Solicitar Copia Gratuita' : 'Comprar Libro'
                                }
                            </button>
                            {
                                book.price === 0 ? null : (
                                    <button className='px-7 py-5 bg-red-500 rounded-lg text-2xl text-white'>
                                        Primer Capítulo Gratuito
                                    </button>
                                )
                            }
                    </div>
                            :
                            <div className='px-7 py-5 bg-blue-800 rounded-lg text-2xl text-white'>
                            Próximamente
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookBanner