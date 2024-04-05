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
                        <span className='text-blue-800 text-4xl'>
                            <BsTwitter />
                        </span>
                    </div>
                    <div>
                        <span className='text-blue-800 text-4xl'>
                            <BsYoutube />
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/3'>
                <p className='text-3xl font-black'>Hola, soy Luca!</p>
                <p className='text-lg font-black'>Soy escritor, programador y emprendedor.</p>
                <p className='text-lg my-5'>I’m the guy they come to when they feel the lack of authenticity in their messaging, vision, and lifestyle. No fancy sales funnels and pushy marketing in this household</p>
                <p className='text-lg my-5'>I help them systemize their workflow, marketing, and content so they can work for 2 hours a day, charge more, and sell their products & services without manual effort.</p>
                <p className='text-lg my-5'>As a freelancer turned consultant turned creator, I’ve developed effective systems with time, skin in the game, and experience with 20,000+ students and clients.</p>
                <p className='text-lg font-black'>Permiteme ayudarte a encontrar tu propósito y a diseñar las estratégias para cumplir con tu misión.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection