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
                        <span className='text-yellow-500 hover:text-yellow-600 text-4xl'>
                        <a href='https://twitter.com/LucaSalLuca'>
                            <BsTwitter />
                        </a>
                        </span>
                    </div>
                    <div>
                        <span className='text-yellow-500 hover:text-yellow-600 text-4xl'>
                            <BsYoutube />
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/3'>
                <p className='text-3xl font-black'>Hola, soy Luca!</p>
                <p className='text-lg font-black text-yellow-500'>Soy escritor, programador y emprendedor.</p>
                <p className='text-lg my-5'>Quiero ayudarte a solucionar problemas. Ser hombre no es fácil, nunca lo ha sido. Si queremos mejorar nuestra salud, aumentar nuestra riqueza, y vivir mejores vidas, tenemos que ser estratégicos.</p>
                <p className='text-lg my-5'>Todos tenemos nuestras guerras que pelear. Yo he peleado las mías y he diseñado sistemas que me han ayudado a solucionar los problemas que se me han presentado y a vivir una vida más plena, satisfactoria y con un sentido de propósito.</p>
                <p className='text-lg my-5'>Mi lema es Más <span className='text-yellow-500 font-bold'>Salud</span>. Más <span className='text-yellow-500 font-bold'>Riqueza</span>. Más <span className='text-yellow-500 font-bold'>Satisfacción</span>. Eso es lo que quiero para mi vida y para la tuya.</p>
                <p className='text-lg font-black text-yellow-500'>Permiteme ayudarte a encontrar tu propósito y a diseñar las estratégias para cumplir con tu misión.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection