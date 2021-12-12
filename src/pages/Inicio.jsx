import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'media/logo-udea-white.png'

const Inicio = () => {
    return (
        <div>
           <header className='bg-green-700 h-40'> 
           <img className='px-5 py-10' src={Logo} alt=""  />
           </header>
           <body className='h-96'>
           <button
                    type='submit'
                    className='group relative w-30 my-10 mx-10 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                    >                   
                    <Link to='/auth/login'>Ingresar</Link>    
                    
           </button>
           </body>
        </div>
    )
}

export default Inicio
