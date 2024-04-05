
import Contact from '@/app/components/Contact';
import Subscribe from '@/app/components/Subscribe'
import courses from '@/app/utils/courses'

const CourseDetails = async ({params}) => {
    const { slug } = params
    const course = courses.find((item) => item.slug === slug);
    
  return (
    <main className='max-w-7xl mx-auto w-full pt-[110px]'>
        <p className='text-4xl font-bold tracking-wide mb-10'>{course.title}</p>
        <p className='text-2xl'>Estamos trabajando en este curso...</p>
        <div className='card max-w-2xl p-5 mt-10'>
            <p className='text-xl lg:text-2xl mb-5'>Entérate antes que nadie del lanzamiento de este curso registrándote a nuestro Boletín.</p>
            <Subscribe />
        </div>
        <Contact />
    </main>
  )
}

export default CourseDetails
