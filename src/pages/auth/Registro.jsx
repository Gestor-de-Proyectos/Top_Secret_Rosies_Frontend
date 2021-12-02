import React from 'react';
import { Link } from 'react-router-dom';

import Input from 'components/input';
import useFormData from 'hooks/useFormData';

function Registro() {
  const { form, formData, updateFormData } = useFormData();

  const submitForm = (e)=>{
    e.preventDefault();
  };
  
  return (
    <>
      <div className='max-w-md w-full space-y-8'>
        <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
          Crea tu cuenta
        </h2>
        <form className='mt-8 space-y-6'>
          <label htmlFor='nombre'>
            Nombre
            <input
              name='nombre'
              type='text'
              autoComplete='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm'
              placeholder='Yadira' />
          </label>
          <label htmlFor='apellido'>
            Apellido
            <input
              name='apellido'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm'
              placeholder='Henao' />
          </label>
          <label htmlFor='identificacion'>
            Número de identificación
            <input
              name='identificacion'
              type='id'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm'
              placeholder='1023452217' />
          </label>
          <label htmlFor='correo'>
            Correo electrónico
            <input
              name='correo'
              type='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm'
              placeholder='yadira.henao@udea.edu.co' />
          </label>
          <label htmlFor='contraseña'>
            Contraseña
            <input
              name='contraseña'
              type='password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm'
              placeholder='xyu7651_u86' />
          </label>

          <label htmlFor='tipo-usuario'>
            Tipo de usuario
            <select
              name='tipo-usuario'
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm bg-gray-200'>

              <option value="1">Estudiante</option>
              <option value="2">Líder</option>
              <option value="3">Administrador</option>

            </select>
          </label>



          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            >

              <Link to='/admin'>Regístrate</Link>
            </button>
          </div>

          <div className='flex items-center justify-between ml-2 block text-sm text-gray-900'>
            <span>¿Ya tienes cuenta?</span>
            <Link to='/'>
              <span className='font-medium text-green-600 hover:text-green-500'>Inicia Sesión</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registro;