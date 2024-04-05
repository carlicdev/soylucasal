import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className='card w-full p-10'>
        <div className='flex flex-wrap w-full max-w-7xl mx-auto pt-10 lg:pt-0'>
            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                <p className='text-5xl lg:text-7xl font-black tracking-wide text-special leading-tight'>Más Salud. Más Riqueza. Más Satisfacción.</p>
                <p className='mt-5 text-2xl'>Reclama tu libertad.</p>
                <p className='my-5 text-2xl'>Conviértete en el hombre que estás destinado a ser.</p>
                <div className='flex justify-center lg:justify-start mt-5 gap-5'>
                    <Link href={'#about'}>
                    <div className='px-7 py-5 bg-blue-800 rounded-lg text-2xl text-white'>
                        Conoce Más <span className="hidden lg:inline">Sobre Luca</span>
                    </div>
                    </Link>
                </div>
            </div>
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-5 p-10'>
            <Image src={'/man.png'} width={500} height={500} />
        </div>
        </div>
    </div>
  )
}

export default Hero