"use client"

import { useState } from 'react'

const Subscribe = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
  
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  email: email
                }) 
            })
    
            const data = await response.json();

            if (data.status === 200) { 
              setEmail('')
            }
        } catch (err) {
            console.log('error:', err)
        }
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                placeholder='correo electrónico'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full text-lg text-gray-900 outline-none focus:outline-red-500 bg-gray-100 my-2 py-1 px-2 rounded '
            />
            <button 
                type='submit'
                className='rounded-lg shadow-md shadow-slate- hover:bg-orange-700 w-full py-5 mt-4 mb-2 text-white bg-red-700 mx-auto text-2xl'>
                Suscribirme
            </button>
        </form>
        {error && (
            <p className='text-red-500'>{error} </p>
        )}
        {success && (
            <p className='text-green-500'>{success} </p>
        )}
    </div>
  )
}

export default Subscribe