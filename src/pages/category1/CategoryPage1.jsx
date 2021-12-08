import React from 'react';
import { Link } from 'react-router-dom';

const Category1 = () => {
  return (  
    
  <div className='tabla'>
    <h3 className='mt-6 text-center text-3xl font-bold text-gray-900'>
          Proyectos
        </h3>

      <table class='table-auto text-center w-9/12'>
    <thead>
      <tr class="bg-green-500">
        <th>Id proyecto</th>
        <th>Nombre proyecto</th>
        <th>Estado</th>
        <th>Fase</th>      
        <th>Editar</th>  
        <th>Eliminar</th>      
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1001</td>
        <td>Nanopartículas</td>
        <td>Activo </td>
        <td>En desarrollo</td>    
        <td></td>
        <td></td>        
      </tr>
      <tr class="bg-green-100">
        <td>1002</td>
        <td>Prótesis parcial de mano</td>
        <td>Inactivo </td>
        <td>Terminado</td> 
        <td></td> 
        <td></td>       
      </tr>
      <tr>
        <td>1003</td>
        <td>Videojuego TDAH</td>
        <td>Activo </td>
        <td>En desarrollo</td> 
        <td></td>
        <td></td>        
        
      </tr>
      <tr class="bg-green-100">
        <td>1004</td>
        <td>Nanopartículas</td>
        <td>Activo </td>
        <td>En desarrollo</td> 
        <td></td> 
        <td></td>       
      </tr>
    </tbody>
  </table>

  <h3 className='mt-6 text-center text-3xl font-bold text-gray-900'>
          
        </h3>


  <button
            type='submit'
            className='group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
          >
            
            <Link to='/login'>Agregar nuevo proyecto</Link>
          </button>

  </div>


    )
  };
  
  export default Category1;