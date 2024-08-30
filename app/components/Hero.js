import Link from "next/link"
import Image from "next/image"
import Subscribe from "./Subscribe"

const Hero = () => {
  return (
    <div className='card w-full p-5'>
        <div className='flex flex-wrap w-full max-w-7xl mx-auto pt-10 lg:pt-0'>
            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                <p className="text-lg mb-5">Newsletter: <span className="text-yellow-300 font-bold">Por La Libertad</span></p>
                <p className='text-5xl font-black lg:text-6xl mt-2 mb-5'>Más Salud. Más Riqueza. Más Satisfacción.</p>
                <p className='text-lg lg:text-xl  mb-2 text-justify'>Toma el control de tu vida y empieza a construir tus propios sueños. Deja de trabajar para los sueños de otra persona.</p>
                <p className='text-lg lg:text-xl  mb-2 text-justify'>Siempre he sido <span className="font-bold">mi propio jefe.</span> Siempre he trabajado en mis propios sueños.</p>
                <p className='text-lg lg:text-xl mb-2 text-justify'>Quiero ayudarte experimentar el mismo nivel de libertad. Quiero que experimentes la profunda satisfacción de ver <span className="font-bold">tus sueños realizados.</span></p>
                <p className='text-lg lg:text-xl  mb-2 text-justify'>Suscríbete a mi newsletter para <span className="font-bold text-yellow-300">RECLAMAR TU LIBERTAD.</span></p>
                <div className='flex justify-center lg:justify-start mt-5 gap-5'>
                    <Subscribe text={'Quiero Mi Libertad'}/>
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