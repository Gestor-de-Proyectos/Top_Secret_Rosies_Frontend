import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import PrivateRoute from 'components/PrivateRoute';
import { GET_INSCRIPCIONES } from 'graphql/inscripciones/queries';
import { APROBAR_INSCRIPCION } from 'graphql/inscripciones/mutations';
import { RECHAZAR_INSCRIPCION } from 'graphql/inscripciones/mutations';
import ButtonLoading from 'components/ButtonLoading';
import { toast } from 'react-toastify';
import {  AccordionStyled,  AccordionSummaryStyled,  AccordionDetailsStyled,} from 'components/Accordion';

const IndexInscripciones = () => {
  const { data, loading, error, refetch } = useQuery(GET_INSCRIPCIONES);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <div>Loading...</div>;
  return (
    <PrivateRoute roleList={['ADMINISTRADOR', 'LIDER']}>
      <div className='p-10'>
      <h1 className='text-green-900 text-xl font-bold uppercase'>Inscripciones</h1>
        <div className='uppercase font-bold text-gray-100'>
          <AccordionInscripcion 
            titulo='Inscripciones aprobadas'
            data={data.Inscripciones.filter((el) => el.estado === 'ACEPTADO')}
          />
          <AccordionInscripcion
            titulo='Inscripciones pendientes'
            data={data.Inscripciones.filter((el) => el.estado === 'PENDIENTE')}
            refetch={refetch}
          />
          <AccordionInscripcion
            titulo='Inscripciones rechazadas'
            data={data.Inscripciones.filter((el) => el.estado === 'RECHAZADO')}
          />
        </div>
      </div>
    </PrivateRoute>
  );
};

const AccordionInscripcion = ({ data, titulo, refetch = () => {} }) => {
  return (
    <AccordionStyled>
      <AccordionSummaryStyled>
        {titulo} ({data.length})
      </AccordionSummaryStyled>
      <AccordionDetailsStyled>
        <div className='flex'>
          {data &&
            data.map((inscripcion) => {
              return <Inscripcion inscripcion={inscripcion} refetch={refetch} />;
            })}
        </div>
      </AccordionDetailsStyled>
    </AccordionStyled>
  );
};

const Inscripcion = ({ inscripcion, refetch }) => {
  const [aprobarInscripcion, { data: data, loading: loading, error }] =
    useMutation(APROBAR_INSCRIPCION);
  
    useEffect(() => {
    if (data) {
      toast.success('Inscripcion aprobada con exito');
      refetch();
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error('Error aprobando la inscripcion');
    }
  }, [error]);

  const [rechazarInscripcion, { data: mutationData, loading: mutationLoading }] =
    useMutation(RECHAZAR_INSCRIPCION);
  
  useEffect(() => {
    if (mutationData) {
      toast.success('Inscripcion rechazada con exito');
      refetch();
    }
  }, [mutationData]);
 
  

  const cambiarEstadoInscripcion = () => {
    aprobarInscripcion({
      variables: {
        aprobarInscripcionId: inscripcion._id,
      },
    });
  };

    const cambiarEstadoInscripcion_R = () => {
    rechazarInscripcion({
      variables: {
        rechazarInscripcionId: inscripcion._id,
      },
    });
  };

  return (
    <div className='bg-gray-50 flex flex-col p-6 m-2 capitalize rounded-lg items-center justify-center shadow-xl'>
      <span className='text-lg font-bold '>{inscripcion.proyecto.nombre}</span>
      <span className='text-green-700'>{inscripcion.estudiante.nombre}</span>
      <span>{inscripcion.estado}</span>
      {inscripcion.estado === 'PENDIENTE' && (
        <div className='flex-col flex'><ButtonLoading
          onClick={() => {
            cambiarEstadoInscripcion();
          }}
          text='Aprobar'
          loading={loading}
          disabled={false}
        />
        <ButtonLoading
        onClick={() => {
          cambiarEstadoInscripcion_R();
        }}
        text='Rechazar'
        loading={mutationLoading.RECHAZAR_INSCRIPCION}
        disabled={false}
      />
      </div>
      )}
    </div>
  );
};

export default IndexInscripciones;