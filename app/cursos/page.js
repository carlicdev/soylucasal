import CourseCard from '../components/CourseCard'
import courses from '../utils/courses'

const Cursos = () => {
  return (
    <div className='max-w-7xl mx-auto w-full pt-[110px]'>
        <p className='text-5xl text-special font-black text-center'>Nuestros Cursos</p>
        <div className='flex flex-wrap mt-5 justify-around gap-5'>
          {
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          }
        </div>
    </div>
  )
}

export default Cursos