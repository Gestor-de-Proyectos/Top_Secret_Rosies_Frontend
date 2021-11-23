import React from 'react';
import Logo from 'media/logo-udea-white.png'

const Index = () => {
  return (
    <div>
      <div className='bg-white h-screen'>
        <header className='bg-green-700 h-40'>
          <img className='px-5 py-10' src={Logo} alt="" />
        </header> 
      </div>
    </div>
  );
};

export default Index;
