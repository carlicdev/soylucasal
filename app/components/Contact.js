"use client"

import { useRef, useState } from 'react'
import { VscSend} from 'react-icons/vsc'
import { AiOutlineReload } from 'react-icons/ai'
import { BsSend, BsTwitter, BsYoutube } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import Logo from './Logo'

const Contact = () => {
    const formRef = useRef()
    const [isValid, setIsValid] = useState(true)
    const [sending, setSending] = useState(false)
    const [serverError, setServerError] = useState(null)
    const [serverMsg, setServerMsg] = useState(null)
    const [subject, setSubject] = useState('')
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
  
    // Función para verificar el formato del correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
  
    const handleChange = (e) => {
      setServerError(null)    
      const { name, value } = e.target;
      setForm({...form, [name]: value})
      if (name === 'email') {
        setIsValid(isValidEmail(value))
      }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true)
  
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  email: form.email,
                  name: form.name,
                  subject: subject,
                  message: form.message
                }) 
            })
    
            const data = await response.json();
            if (data) setSending(false)
            if (data.status === 400) setServerError(data.message)
            if (data.status === 200) { 
              setServerMsg(data.message)
              setForm({
                name: '',
                email: '',
                message: ''
            })
            setSubject('')
            }
        } catch (err) {
          setSending(false)
          setServerError(err.message)
        }
        
    }
  
    const buttonText = sending ?  <span className='flex items-center gap-2'><AiOutlineReload className='animate-spin'/>Enviando</span> : <span className='flex items-center gap-2'><VscSend/>Enviar</span>

    //mensaje de error si el correo no es válido
    const errorMessage = !isValid ? (
      <p className="mb-1 text-xs text-red-500">*Ingresa un correo electrónico válido.</p>
    ) : null;

  return (
    <div id={'contact'} className='w-full my-[200px]'>
        <p className='font-black text-5xl text-center my-5'>Contacto</p>
      <div id='contact' className='max-w-7xl mx-auto card rounded-lg p-7 flex flex-wrap items-center'>
        <div className='lg:order-2 w-full lg:w-1/2 flex flex-col items-center gap-10 '>
          <Logo />
            <div className='flex flex-col justify-center items-center gap-10'>
                <p className='font-black text-5xl text-center'>Tengamos una <span className='text-yellow-500'>conversación</span>.</p>
                <div className='felx flex-col  mx-auto'>
                    <div className='px-2 py-4 flex gap-2 items-center'>
                    <span className='text-yellow-500 text-xl'><IoMdMail/></span>
                    <p className='text-xl'>lucasal.contacto@gmail.com</p>
                    </div>
                </div>
            </div>
          <div className='mb-0 mt-auto flex gap-10 mx-auto'>
            <div>
              <span className='text-yellow-500 hover:text-yellow-600 text-7xl'>
                <a href='https://twitter.com/LucaSalLuca'>
                    <BsTwitter />
                </a>
              </span>
            </div>
            <div>
              <span className='text-yellow-500 hover:text-yellow-600 text-7xl'>
                <BsYoutube />
              </span>
            </div>
          </div>
        </div>
        <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='lg:order-1 w-full lg:w-1/2 bg-gray-100 rounded-lg p-7 mt-5 lg:mt-0'
        >
          <p className='text-xl mb-5 text-gray-800'>Asunto:</p>
          <div className='flex flex-wrap gap-2 justify-start'>
            <div 
                onClick={() => setSubject((prev) => prev === 'Dudas Y Aclaraciones' ? '' :'Dudas Y Aclaraciones')}
                className={`${subject === 'Dudas Y Aclaraciones' ? 'bg-yellow-500 text-white' : 'text-yellow-500'} px-4 py-3 rounded-lg border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white  cursor-pointer`}
            >
              Dudas y Aclaraciones
            </div>
            <div 
                onClick={() => setSubject((prev) => prev === 'Colaboraciones' ? '' :'Colaboraciones')}
                className={`${subject === 'Colaboraciones' ? 'bg-yellow-500 text-white' : 'text-yellow-500'} px-4 py-3 rounded-lg border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white  cursor-pointer`}
            >
              Colaboraciones
            </div>
            <div 
                onClick={() => setSubject((prev) => prev === 'Asesorías' ? '' :'Asesorías')}
                className={`${subject === 'Asesorías' ? 'bg-yellow-500 text-white' : 'text-yellow-500'} px-4 py-3 rounded-lg border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white  cursor-pointer`}
            >
            Asesorías
            </div>
            <div 
                onClick={() => setSubject((prev) => prev === 'Problemas con la Página' ? '' :'Problemas con la Página')}
                className={`${subject === 'Problemas con la Página' ? 'bg-yellow-500 text-white' : 'text-yellow-500'} px-4 py-3 rounded-lg border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white  cursor-pointer`}
            >
              Problemas con la Página
            </div>
            <div 
                onClick={() => setSubject( (prev) => prev === 'Conversación Casual' ? '' : 'Conversación Casual')}
                className={`${subject === 'Conversación Casual' ? 'bg-yellow-500 text-white' : 'text-yellow-500'} px-4 py-3 rounded-lg border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white  cursor-pointer`}
            >
              Conversación Casual
            </div>

          </div>
          <div className='flex flex-col mt-5'>
            <label className='flex flex-col w-full mb-5'>
              <span className=' mb-2 text-xl text-gray-800'>Nombre:</span>
              <input 
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                className='bg-white py-3 px-2 text-xl text-black rounded-lg outline-none border focus:outline-yellow-500'
              />
            </label>
            <label className='flex flex-col w-full mb-5'>
              <span className='mb-2 text-xl text-gray-800'>Email:</span>
              <input 
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                className='bg-white py-3 px-2 text-xl text-black rounded-lg outline-none border focus:outline-yellow-500'
              />
              <span className='mt-1'>{errorMessage}</span>
            </label>
            <label className='flex flex-col w-full mb-5'>
              <span className='mb-2 text-xl text-gray-800'>Tu Mensaje:</span>
              <textarea 
                name='message'
                value={form.message}
                onChange={handleChange}          
                rows={3} 
                className='bg-white py-3 px-2 text-xl text-black rounded-lg outline-none border focus:outline-yellow-500'
              />
            </label>
            <div>
              <button 
              className='flex gap-4  hover:bg-yellow-600 hover:scale-105 items-center px-7 py-5 rounded-lg bg-yellow-500 text-black text-2xl shadow'
              type='submit'
              disabled={!isValid}
              >
                {serverMsg ? serverMsg : buttonText}
              </button>
              <p className='text-red-400'>{serverError}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact