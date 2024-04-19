import Link from "next/link"


const ConfirmationPage = () => {
    return (
      <main className='h-screen pt-[110px]'>
          <div className='max-w-5xl mx-auto card p-5 flex flex-col gap-4'>
              <p className='text-5xl font-black'>Quiero agradecerte por la confianza.</p>
              <p className='text-5xl font-black'>Te has unido exitosamente a Las Cartas de Luca</p>
              <p className='text-2xl'>En tu bandeja de entrada encontrarás un correo de bienvenida, así como una descripción general de lo que puedes esperar de Las Cartas de Luca.</p>
              <p className='text-2xl mt-5'>¿Quieres leer ediciones previas de Las Cartas de Luca? Puedes leer todas Las Cartas de Luca en mi Blog.</p>
              <div className='flex'>
                <Link href='/blog'>
                  <div className='px-7 py-5 bg-blue-800 rounded-lg text-2xl text-white'>
                      Ir Al Blog
                  </div>
                </Link>
              </div>
          </div>
      </main>
    )
  }
  
  export default ConfirmationPage