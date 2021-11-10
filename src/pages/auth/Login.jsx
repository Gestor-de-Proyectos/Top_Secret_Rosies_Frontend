import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className='max-w-md w-full space-y-8'>
            <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
                Inicia sesión en tu cuenta
            </h2>
            <form className='mt-8 space-y-6'>
                <input type='hidden' name='remember' defaultValue='true' />
                <div className='rounded-md shadow-sm -space-y-px'>
                    <div>
                        <input
                            name= 'email'
                            type='email'
                            autoComplete='email'
                            required
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm'
                            placeholder='Correo Electrónico'
                        />
                    </div>
                    <div>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                            required
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm'
                            placeholder='Contraseña'
                        />
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                    <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded'
                    />
                    <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                        Recuérdame
                    </label>
                    </div>

                    <div className='text-sm'>
                    <a href='/' className='font-medium text-green-600 hover:text-green-500'>
                        ¿Olvidaste tu contraseña?
                    </a>
                    </div>
                </div>
                <button
                    type='submit'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                    >                    
                    <Link to='/index'>Iniciar sesión</Link>
                </button>

                <div className='flex items-center justify-between ml-2 block text-sm text-gray-900'>
                    <span>¿No tienes cuenta?</span>
                    <Link to='/registro'>
                    <span className='font-medium text-green-600 hover:text-green-500'>Regístrate</span>
                    </Link>
                </div>



            </form>

        </div>
    )
}

export default Login;