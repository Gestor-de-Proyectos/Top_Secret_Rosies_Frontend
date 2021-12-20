import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
  query Query($filtro: FiltroUsuarios) {
    Usuarios(filtro: $filtro) {
      _id
      nombre
      apellido
      correo
      estado
      identificacion
      rol
    }
  }
`;

const GET_USUARIO = gql`
  query Usuario($_id: String!) {
    Usuario(_id: $_id) {
      _id
      nombre
      apellido
      correo
      estado
      identificacion
      rol      
    }
  }
`;
const GET_USUARIOP = gql`
  query Usuario($_id: String!) {
    Usuario(_id: $_id) {
      _id
      nombre
      apellido
      correo      
      identificacion
    }
  }
`;

export { GET_USUARIOS, GET_USUARIO, GET_USUARIOP };