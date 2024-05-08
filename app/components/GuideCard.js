import Link from "next/link"
import Image from "next/image"

const GuideCard = ({guide}) => {

  return (
    <div className='card rounded-lg flex flex-col justify-center relative'>
        <div className='tag text-center absolute top-7 right-[-10px] bg-red-600 w-[95px] px-2 py-1 shadow-md'>
           <span className='text-xl text-white mx-auto font-bold text-lg text-special capitalize' >{guide.type}</span>
        </div>
        <div className="p-3 flex flex-wrap">
            <div className='w-full lg:w-1/4 flex gap-2 items-center justify-start'>
                <div className='w-full h-full'>
                    <Image src={guide.img} alt='profileImg' width={350} height={350} className="min-h-[150px]"/>
                </div>
            </div>
            <div className="w-full lg:w-3/4">
                <div className="flex flex-col p-5">
                    <Link href={`/guias/${guide.slug}`}>
                        <p className='text-2xl text-special font-bold tracking-wide mb-3 cursor-pointer hover:text-red-600 capitalize'>{guide.title}</p>
                    </Link>
                    <div className="flex gap-3 flex-wrap">
                        <p className="text-lg tracking-wide text-justify">{guide.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GuideCard