import Link from "next/link"
import Image from "next/image"
import { AiOutlineHeart, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai'

const CourseCard = ({course}) => {

  return (
<div className='card max-w-sm rounded-lg flex flex-col justify-center'>
        <div className="w-full h-[250px] rounded-t-lg relative">
            <div className='tag text-center absolute top-7 right-[-10px] bg-blue-800 w-[95px] px-2 py-1 shadow-md'>
                <span className='text-xl text-white mx-auto font-bold text-lg text-special' >Curso</span>
            </div>
            <Image src={course.img} alt='profileImg' width={400} height={250} className="h-[250px]"/>
        </div>
        <div className="p-3 flex flex-col justify-center">
            <div className='w-full flex items-center px-2'>
                <Link href={`/cursos/${course.slug}`}>
                    <p className='text-2xl text-special font-bold mb-3 cursor-pointer hover:text-blue-800'>{course.title}</p>
                </Link>
            </div>
            <div className="mb-4 px-2">
                <p className="text-lg text-justify">{course.desc}</p>
            </div>
            <div className="flex justify-around">
                <div className="flex items-center gap-1">
                    <span className="text-2xl text-red-600"><AiOutlineHeart /></span>
                    <p>0</p>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-2xl text-blue-600"><AiOutlineMessage /></span>
                    <p>0</p>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-2xl text-yellow-600"><AiOutlineUser /></span>
                    <p>0</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard