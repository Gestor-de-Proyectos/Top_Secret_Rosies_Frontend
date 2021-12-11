import React, { useEffect } from 'react';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import { Link } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/auth/mutations';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const { form, formData, updateFormData } = useFormData();

  const [login, { data: dataMutation, loading: mutationLoading, error: mutationError }] =
    useMutation(LOGIN);

  const submitForm = (e) => {
    e.preventDefault();

    login({
      variables: formData,
    });
  };

  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.login.token) {
        setToken(dataMutation.login.token);
        navigate('/');
      }
    }
  }, [dataMutation, setToken, navigate]);

    return( 
        <div className='max-w-md w-full space-y-8'>
            <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
                Inicia sesión en tu cuenta
            </h2>
            <form className='mt-8 space-y-6'onSubmit={submitForm} onChange={updateFormData} ref={form}>
                <input type='hidden' name='remember' defaultValue='true' />
                <div className='rounded-md shadow-sm -space-y-px'>
                    <div>
                        <Input
                            name= 'email'
                            type='email'
                            autoComplete='email'
                            required
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm'
                            placeholder='Correo Electrónico'
                        />
                    </div>
                    <div>
                        <Input
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
                <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Iniciar Sesión'
        />
                </form>
                <div className='items-center justify-between ml-2 block text-sm text-gray-900'>
                    
                    <span>¿No tienes cuenta?</span>
                    <Link to='/auth/register'>
                    <span className='font-medium text-green-600 hover:text-green-500'>Regístrate</span>
                    </Link>
                </div>
            
        </div>
    )
}

export default Login;