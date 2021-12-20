import { gql } from '@apollo/client';

const CREAR_AVANCE = gql`
  mutation Mutation(
    $fecha: Date!
    $descripcion: String!
    $proyecto: String!
    $creadoPor: String!
  ) {
    crearAvance(
      fecha: $fecha
      descripcion: $descripcion
      proyecto: $proyecto
      creadoPor: $creadoPor
    ) {
      _id
    }
  }
`;
<<<<<<< HEAD

const CREAR_OBSERVACION = gql`
  mutation Mutation($_id: String!, $observacion: String!) {
    crearObservacion(_id: $_id, observacion: $observacion) {
      _id
      observaciones
    }
  }
`;

=======
const CREAR_OBSERVACION = gql`
mutation Mutation($id: String!, $observacion: String!) {
  crearObservacion(_id: $_id, observacion: $observacion) {
  _id
  observaciones  
  }
}
`
>>>>>>> 3efbcfa9df590ef9f426a1584c23bc79e39dde50
export { CREAR_AVANCE, CREAR_OBSERVACION };