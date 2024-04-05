
import Logo from './Logo'
import Link from 'next/link'
import { AiOutlineTrademark } from 'react-icons/ai'
import { getCategories } from '../services/graphql'
import Subscribe from './Subscribe'
import books from '../utils/books'
import courses from '../utils/courses'

const Footer = async () => {
    const categories = await getCategories();

  return (
    <div className='w-full card py-5 mt-20'>
        <div className='max-w-7xl w-full mx-auto'>
            <div className='w-full p-5 flex items-center justify-center'>
                <Logo />
            </div>
            <div className='flex flex-wrap px-2 lg:px-0'>
                <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-2'>
                    <p className='text-xl text-special font-black mb-2 mt-3 uppercase'>Libros</p>
                    <div className='flex flex-col gap-2'>
                        {
                            books.map((book) => (
                                <Link key={book.id} href={`/libros/${book.slug}`}>
                                    <p className='text-lg'>{book.title}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-5 lg:mt-0 w-full md:w-1/2 lg:w-1/4 flex flex-col gap-2'>
                    <p className='text-xl text-special font-black mb-2 mt-3 uppercase'>Cursos</p>
                    <div className='flex flex-col gap-2'>
                    {
                            courses.map((course) => (
                                <Link key={course.id} href={`/cursos/${course.slug}`}>
                                    <p className='text-lg'>{course.title}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-5 lg:mt-0 w-full md:w-1/2 lg:w-1/4 flex flex-col gap-2'>
                    <p className='text-xl text-special font-black mb-2 mt-3 uppercase'>Categorías</p>
                    <div className='flex flex-col gap-2'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/categoria/${category.slug}`}>
                            <span className='text-lg cursor-pointer block hover:text-blue-800'>
                                {category.name} ({category.posts.length})
                            </span>
                        </Link>
                    ))}
                    </div>
                </div>
                <div className='mt-5 lg:mt-0 w-full lg:w-1/4 '>
                    <p className='text-xl mb-2 text-justify'>Entérate de nuevos posts, cursos, productos y promociones.</p>
                    <Subscribe />
                </div>
            </div>
            <div className='mt-10'>
                <div className='ml-0 mr-auto flex text-gray-500 items-center font-light'>
                    <span className='mr-1'><AiOutlineTrademark/></span>
                    <p className='text-gray-500'> soylucasal</p>
                    <p className='ml-1 text-sm'>2024</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer