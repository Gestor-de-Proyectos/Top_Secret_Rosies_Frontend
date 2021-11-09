import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from 'context/userContext';
import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import Index from 'pages/Index';
import Page2 from 'pages/Page2';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import 'styles/globals.css';

// import PrivateRoute from 'components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
      domain='misiontic-concesionario.us.auth0.com'
      clientId='WsdhjjQzDLIZEHA6ouuxXGxFONFGAQ4g'
      redirectUri='http://localhost:3000/admin'
      audience='api-autenticacion-concesionario-mintic'
    >
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>            
          <Route path='/' element={<AuthLayout />}>
              <Route path='' element={<Login />} /> 
              <Route path='registro' element={<Registro />} /> 
            </Route>

            <Route path='/index' element={<PrivateLayout />}>
              <Route path='/index' element={<Index />} /> 
              <Route path='/index/usuarios' element={<Page2 />} />
              <Route path='/index/category1/' element={<Category1 />} />               
            </Route>
            
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Auth0Provider>
  );
}

export default App;
