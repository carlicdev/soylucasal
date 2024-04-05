
const Comments = () => {
    return (
      <div className='w-full card mt-3 rounded-lg p-3'>
          <div className='flex flex-col'>
              <h4 className='text-3xl text-special font-black mb-3'>Comentarios</h4>
              <textarea 
                  disabled
                  rows={3}
                  className='w-full p-1 outline-none focus:outline-blue-800 rounded-lg border  border-gray-500'
                  placeholder='Únete a la discusión...'
              />
            <button 
              type='submit'
              disabled
              className='border border-blue-800 text-blue-800 py-2 px-5 mt-5 rounded-lg font-medium hover:bg-blue-800 hover:text-white'
            >
                Publicar Comentario
            </button>
          </div>
      </div>
    )
  }
  
  export default Comments