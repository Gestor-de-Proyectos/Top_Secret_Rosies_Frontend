import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ImagenLogo from './ImagenLogo';
import { useAuth } from 'context/authContext';
import PrivateComponent from './PrivateComponent';
import { useUser } from 'context/userContext';

const SidebarLinks = () => (
    <ul className='mt-12'>
      <SidebarRoute to='/' title='Inicio' icon='fas fa-home' />
      <SidebarRoute to='/perfil' title='Perfil' icon='fas fa-user-cog' />
      <PrivateComponent roleList={['LIDER']}>
        <SidebarRoute to='usuariosLider' title='Usuarios' icon='fas fa-users'/>
      </PrivateComponent>
      <PrivateComponent roleList={['ADMINISTRADOR']}>
        <SidebarRoute to='/usuarios' title='Usuarios' icon='fas fa-users' />
      </PrivateComponent>      
      <SidebarRoute to='/proyectos' title='Proyectos' icon='fas fa-tasks' />  
      <PrivateComponent roleList={['LIDER']}>
        <SidebarRoute to='/inscripciones' title='Aprobacion Inscripciones' icon='fas fa-user' />
      </PrivateComponent>
      <PrivateComponent roleList={['LIDER', 'ESTUDIANTE']}>
      <SidebarRoute to='/avances/:projectid' title='Avances' icon='fas fa-book-open'/>
      </PrivateComponent>
      <Logout />
    </ul>
  );

const Logout = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {    
    setToken(null);
  };
  return (
    <li> 
    <button type='button' onClick={() => deleteToken()}>
      <NavLink to='/' className='sidebar-route text-red-700'>
        <div className='flex items-center'>
          <i className='fas fa-sign-out-alt' />
          <span className='text-sm  ml-2'>Cerrar Sesión</span>
        </div>
      </NavLink>
      </button>
    </li>
  );
};


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
      {/* Sidebar starts */}
      <div className='sidebar hidden md:flex'>
        <div className='px-8'>
          <ImagenLogo />
          <SidebarLinks />
        </div>
      </div>
      <div className='flex md:hidden w-full justify-between bg-gray-800 p-2 text-white'>
        <button type='button' onClick={() => setOpen(!open)}>
         <i className={`fas fa-${open ? 'times' : 'bars'}`}  />
         </button>
         <i className='fas fa-home' />
      </div>
      {open && <ResponsiveSidebar />}
      {/* Sidebar ends */}
    </div>
  );
};

const ResponsiveSidebar = () => (
    <div>
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
          <ImagenLogo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );

const SidebarRoute = ({ to, title, icon }) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-green-700'
            : 'sidebar-route text-gray-900 hover:text-white hover:bg-green-400'
        }
      >
        <div className='flex items-center'>
          <i className={icon} />
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );

const SidebarRouteImagen = ({ to, title, icon}) => {
  const{userData} = useUser();
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-green-700'
            : 'sidebar-route text-gray-900 hover:text-white hover:bg-green-400'
        }
      >
        
      </NavLink>
    </li>
  );
};

export default Sidebar;
