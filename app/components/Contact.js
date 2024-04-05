
import { BsSend, BsTwitter, BsYoutube } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import Logo from './Logo'

const Contact = () => {
  return (
    <div id={'contact'} className='w-full my-[200px]'>
        <p className='font-black text-5xl text-center my-5'>Contacto</p>
      <div id='contact' className='max-w-7xl mx-auto card rounded-lg p-7 flex flex-wrap items-center'>
        <div className='lg:order-2 w-full lg:w-1/2 flex flex-col items-center gap-10 '>
          <Logo />
            <div className='flex flex-col justify-center items-center gap-10'>
                <p className='font-black text-5xl text-center'>Tengamos una <span className='text-blue-800'>conversación</span>.</p>
                <div className='felx flex-col  mx-auto'>
                    <div className='px-2 py-4 flex gap-2 items-center'>
                    <span className='text-blue-800 text-xl'><IoMdMail/></span>
                    <p className='text-xl'>lucasal.contacto@gmail.com</p>
                    </div>
                </div>
            </div>
          <div className='mb-0 mt-auto flex gap-10 mx-auto'>
            <div>
              <span className='text-blue-800 text-7xl'>
                <BsTwitter />
              </span>
            </div>
            <div>
              <span className='text-blue-800 text-7xl'>
                <BsYoutube />
              </span>
            </div>
          </div>
        </div>
        <div className='lg:order-1 w-full lg:w-1/2 bg-gray-100 rounded-lg p-7 mt-5 lg:mt-0'>
          <p className='text-xl mb-5'>Me interesa su servicio de:</p>
          <div className='flex flex-wrap gap-2 justify-start'>
            <div className='px-4 py-3 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white text-blue-800 cursor-pointer'>
              Dudas y Aclaraciones
            </div>
            <div className='px-4 py-3 rounded-lg border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer'>
              Colaboraciones
            </div>
            <div className='px-4 py-3 rounded-lg border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer'>
            Asesorías
            </div>
            <div className='px-4 py-3 rounded-lg border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer'>
              Problemas con la Página
            </div>
            <div className='px-4 py-3 rounded-lg border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer'>
              Conversación Casual
            </div>

          </div>
          <div className='flex flex-col mt-5'>
            <label className='flex flex-col w-full mb-5'>
              <span className=' mb-2 text-xl'>Nombre:</span>
              <input 
              type='text'
                className='bg-white py-3 px-2 text-xl text-black rounded-lg outline-none border focus:outline-blue-800'
              />
            </label>
            <label className='flex flex-col w-full mb-5'>
              <span className='mb-2 text-xl'>Email:</span>
              <input 
              type='email'
                className='bg-white py-3 px-2 text-xl text-black rounded-lg outline-none border focus:outline-blue-800'
              />
            </label>
            <label className='flex flex-col w-full mb-5'>
              <span className='mb-2 text-xl'>Tu Mensaje:</span>
              <textarea 
                rows={3}
                className='bg-white py-3 px-2 text-xl text-black rounded-lg outline-none border focus:outline-blue-800'
              />
            </label>
            <div>
              <button className='flex gap-4  hover:bg-blue-700 items-center px-7 py-5 rounded-lg bg-blue-800 text-white text-2xl shadow'>
                <span><BsSend /></span>Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact