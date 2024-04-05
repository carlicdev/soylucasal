const LastComments = () => {
    return (
      <div className='card p-3 rounded-lg flex flex-col justify-center'>
          <p className='text-xl font-black text-special mb-2 text-center'>Últimos Comentarios</p>
          <div className='flex flex-col justify-around'>
              <div className='py-4 border-y border-gray-500'>
                  <p className=''>Otro libro sobre Estocismo?</p>
                  <p className='text-sm font-light text-gray-600'>1 Comentarios</p>
              </div>
              <div className='py-4 border-y border-gray-500'>
                  <p className=''>Desarrolla una Mayor Confianza</p>
                  <p className='text-sm font-light text-gray-600'>2 Comentarios</p>
              </div>
              <div className='py-4 border-y border-gray-500'>
                  <p className=''>El Poder de tu Sistema de Creencias</p>
                  <p className='text-sm font-light text-gray-600'>1 Comentarios</p>
              </div>
              <div className='py-4 border-y border-gray-500'>
                  <p className=''>Prohibir los Narcocorridos: la Opinión de Anabel Hernández</p>
                  <div className='flex w-full'>
                      <div className='bg-blue-800 px-2 rounded flex'>
                          <p className='text-sm text-white'>Nuevo</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default LastComments