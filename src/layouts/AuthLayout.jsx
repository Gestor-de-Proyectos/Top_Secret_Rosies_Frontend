import ImagenLogo from 'components/ImagenLogo';
import { Outlet } from 'react-router';
import React from 'react';


const AuthLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8'>
      
      <div className='max-w-md w-full'>
        <ImagenLogo/>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;