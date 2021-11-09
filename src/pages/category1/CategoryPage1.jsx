import React from 'react';

const Category1 = () => {
  return (    

    <table class='table-auto text-center w-9/12'>
    <thead>
      <tr class="bg-green-500">
        <th>Id proyecto</th>
        <th>Nombre proyecto</th>
        <th>Estado</th>
        <th>Fase</th>        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1001</td>
        <td>Nanopartículas</td>
        <td>Activo </td>
        <td>En desarrollo</td>        
      </tr>
      <tr class="bg-green-100">
        <td>1002</td>
        <td>Prótesis parcial de mano</td>
        <td>Inactivo </td>
        <td>Terminado</td> 
      </tr>
      <tr>
        <td>1003</td>
        <td>Videojuego TDAH</td>
        <td>Activo </td>
        <td>En desarrollo</td> 
        
      </tr>
      <tr class="bg-green-100">
        <td>1004</td>
        <td>Nanopartículas</td>
        <td>Activo </td>
        <td>En desarrollo</td> 
      </tr>
    </tbody>
  </table>
  
      
  
    )
  };
  
  export default Category1;