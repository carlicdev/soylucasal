import Link from "next/link"
import Image from "next/image"
import Subscribe from "./Subscribe"

const Hero = () => {
  return (
    <div className='card w-full p-10'>
        <div className='flex flex-wrap w-full max-w-7xl mx-auto pt-10 lg:pt-0'>
            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                <p  className='mt-5 font-black text-lg'>Luca Sal</p>
                <p className='text-xl font-semibold lg:text-2xl tracking-wide text-special leading-tight my-2'>Menos del 10% de las personas logra cambios sustanciales en su vida.</p>
                <p className='text-xl font-semibold lg:text-2xl  tracking-wide text-special leading-tight'>Solo el 1% logra Más<span className="text-yellow-500"> Salud</span>, Más  <span className="text-yellow-500">Riqueza</span>, Más<span className="text-yellow-500"> Satisfacción</span>.</p>
                <div className='flex justify-center lg:justify-start mt-5 gap-5'>
                    <Subscribe text={'Acceder al 1%'}/>
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