import React, { useEffect } from 'react';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import { Link, useNavigate } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/auth/mutations';
import { useAuth } from 'context/authContext';
import { toast } from 'react-toastify';

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
        navigate('/home');
      }
      else{
        toast.error('correo o contraseña incorrecto')
      }
    }
  }, [dataMutation, setToken, navigate]);

  useEffect(() => {
    if (mutationError) {
      toast.error("Algo salió mal, intenta de nuevo");
    }     
  }, [mutationError]);

    return( 
        <div className='max-w-md w-full space-y-8'>
            <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
                Inicia sesión en tu cuenta
            </h2>
            <form className='mt-8 space-y-6'onSubmit={submitForm} onChange={updateFormData} ref={form}>
            <Input name='correo' type='email' label='Correo' required />
            <Input name='password' type='password' label='Contraseña' required />
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