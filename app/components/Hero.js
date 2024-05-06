import Link from "next/link"
import Image from "next/image"
import Subscribe from "./Subscribe"

const Hero = () => {
  return (
    <div className='card w-full p-5'>
        <div className='flex flex-wrap w-full max-w-7xl mx-auto pt-10 lg:pt-0'>
            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                <p className="text-lg mb-5">Newsletter: <span className="text-yellow-300 font-bold">La Manada</span></p>
                <p className='text-5xl font-black lg:text-6xl mt-2 mb-5'>Más Salud. Más Riqueza. Más Satisfacción.</p>
                <p className='text-lg lg:text-xl  mb-2'>Soy la oveja negra que se salió con la suya. Soy la oveja que se rio del lobo y después se convirtió en lobo.</p>
                <p className='text-lg lg:text-xl mb-2'>Estás cagado de deberle al banco, del pendejo de tu jefe y de la gorda de tu vieja. <span className="font-bold">Ya estas cagado de perder.</span></p>
                <p className='text-lg lg:text-xl  mb-2'>Voy a ayudarte a <span className="font-bold text-yellow-300">GANAR.</span> Voy a ayudarte a <span className="font-bold text-yellow-300">reclamar tu libertad.</span> </p>
                <div className='flex justify-center lg:justify-start mt-5 gap-5'>
                    <Subscribe text={'Me La Van A Pelar'}/>
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