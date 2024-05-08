import CourseCard from '../components/CourseCard'
import guides from '../utils/guides'

const Guía = () => {
  return (
    <div className='max-w-7xl mx-auto w-full pt-[110px]'>
        <p className='text-5xl text-special font-black text-center'>Nuestras Guías</p>
        <div className='flex flex-wrap mt-5 justify-around gap-5'>
          {
            guides.map((guide) => (
              <CourseCard key={guide.id} course={guide} />
            ))
          }
        </div>
    </div>
  )
}

export default Guía