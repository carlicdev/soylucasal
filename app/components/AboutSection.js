import Image from 'next/image'
import { BsSend, BsTwitter, BsYoutube } from 'react-icons/bs'

const AboutSection = () => {
  return (
    <div id={'about'} className='max-w-7xl mx-auto card my-10 p-5'>
        <p className='text-5xl font-black text-center'>¿Quién es Luca Sal?</p>
        <div className='flex flex-wrap mt-10'>
            <div className='w-full lg:w-1/3 flex flex-col items-center justify-center'>
                <Image src={'/man.png'} width={300} height={300} />
                <div className='flex gap-5 mt-5'>
                    <div>
                        <span className='text-yellow-300 hover:text-yellow-600 text-4xl'>
                        <a href='https://twitter.com/LucaSalLuca'>
                            <BsTwitter />
                        </a>
                        </span>
                    </div>
                    <div>
                        <span className='text-yellow-300 hover:text-yellow-600 text-4xl'>
                            <BsYoutube />
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/3'>
                <p className='text-3xl font-black'>Hola, soy Luca!</p>
                <p className='text-lg font-black text-yellow-300'>Soy escritor, programador y jugador de poker.</p>
                <p className='text-lg my-5'>Podría decirse que ahora también soy emprendedor. La realidad es que soy lo que quiero ser, en el momento que quiero serlo. Esa es la libertad que he buscado siempre.</p>
                <p className='text-lg my-5'>No ha sido fácil salirme con la mía. En un mundo en el que somos programados para obedecer, la oveja negra no la tiene nada fácil. Encontré la manera de que las cosas funcionaran a base de muchos golpes. A base de prueba y error.</p>
                <p className='text-lg my-5'>Pero soy libre. <span className='text-yellow-300 font-bold'>Gané mi LIBERTAD.</span></p>
                <p className='text-lg my-5'>Quiero ayudarte a reclamar tu propia libertad. Quiero pasarte el manual que he construido con mis propios éxitos y fracasos.</p>
                <p className='text-lg my-5'>Tu también eres una oveja negra. Por eso estás aquí. Tu también quieres reclamar tu libertad. Mi lema es Más <span className='text-yellow-300 font-bold'>Salud</span>. Más <span className='text-yellow-300 font-bold'>Riqueza</span>. Más <span className='text-yellow-300 font-bold'>Satisfacción</span>. Eso es lo que quiero para mi vida y para la tuya.</p>
                <p className='text-lg font-black text-yellow-300'>Permiteme ayudarte a encontrar tu propósito y a diseñar las estratégias para cumplir con tu misión.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection