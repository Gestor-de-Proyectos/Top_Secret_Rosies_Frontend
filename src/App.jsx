import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import Index from 'pages/Index';
import Page2 from 'pages/Page2';
import Inicio from './pages/Inicio';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import 'styles/globals.css';


// import PrivateRoute from 'components/PrivateRoute';

const client = new ApolloClient({
uri: 'http://localhost:4000/graphql',
cache: new InMemoryCache(),
})

function App() {
  const [userData, setUserData] = useState({});

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>

          <Route path='' element={<Inicio />} /> 

          <Route path='/login' element={<AuthLayout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/login/registro' element={<Registro />} /> 
            </Route>

            <Route path='/index' element={<PrivateLayout />}>
              <Route path='/index' element={<Index />} /> 
              <Route path='/index/usuarios' element={<Page2 />} />
              <Route path='/index/category1/' element={<Category1 />} />               
            </Route>
            
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
