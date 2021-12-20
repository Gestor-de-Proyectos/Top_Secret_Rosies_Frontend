import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import ButtonLoading from 'components/ButtonLoading';
import Input from 'components/Input';
import { EDITAR_PERFIL } from 'graphql/usuarios/mutations';
import useFormData from 'hooks/useFormData';
import { uploadFormData } from 'utils/uploadFormData';
import { useUser } from 'context/userContext';
import { GET_USUARIOP } from 'graphql/usuarios/queries';
import { toast } from 'react-toastify';

const Profile = () => {  
  const { form, formData, updateFormData } = useFormData();
  const { userData, setUserData } = useUser();

  // falta capturar error de mutacion
  const [editarPerfil, { data: dataMutation, loading: loadingMutation }] =
    useMutation(EDITAR_PERFIL);

  // falta capturar error de query
  const {
    data: queryData1,
    loading: queryLoading1,
    refetch,
  } = useQuery(GET_USUARIOP, {
    variables: {
      _id: userData._id,
    },
  });

  useEffect(() => {
    if (dataMutation) {
      setUserData({ ...userData, foto: dataMutation.editarPerfil.foto });
      toast.success('Perfil modificado con exito');
      refetch();
    }
  }, [dataMutation]);

  const submitForm = async (e) => {
    e.preventDefault();

    const formUploaded = await uploadFormData(formData);

    editarPerfil({
      variables: {
        _id: userData._id,
        nombre: formUploaded,
        apellido: formUploaded,
        identificacion: formUploaded,
        correo: formUploaded
      },
    });
  };

  if (queryLoading1) return <div data-testid='loading'>Loading...</div>;

  return (
    <div className='p-10 flex flex-col items-center justify-center w-full'>
      <h1 className='font-bold text-2xl text-gray-900' >
        Perfil del usuario
      </h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
        
        <Input
          defaultValue={queryData1.Usuario.nombre}
          label='Nombre'
          name='nombre'
          type='text'
          required={true}
          aria-label='input-nombre'
        />
        <Input
          defaultValue={queryData1.Usuario.apellido}
          label='Apellido'
          name='apellido'
          type='text'
          required={true}
        />
        <Input
          defaultValue={queryData1.Usuario.identificacion}
          label='Identificación'
          name='identificacion'
          type='text'
          required={true}
        />     
        <Input
          defaultValue={queryData1.Usuario.correo}
          label='Correo'
          name='correo'
          type='text'
          required={true}
        />       
        <ButtonLoading
          data-testid='buttonLoading'
          text='Confirmar'
          loading={loadingMutation}
          disabled={false}
        />
      </form>
    </div>
  );
};

export default Profile;