import React, { useState, useEffect } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { UserContext } from 'context/userContext';
import { AuthContext } from 'context/authContext';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Login from 'pages/auth/login';
import Register from 'pages/auth/Register';
import Index from 'pages/Index';
import IndexUsuarios from 'pages/usuarios/index';
import EditarUsuario from 'pages/usuarios/editar';
import IndexProyectos from 'pages/proyectos/index';
import NuevoProyecto from 'pages/proyectos/nuevoProyecto';
import Inicio from './pages/Inicio';
import Category1 from 'pages/category1/CategoryPage1';
import jwt_decode from 'jwt-decode';
import 'styles/globals.css';
import 'styles/tabla.css';


// import PrivateRoute from 'components/PrivateRoute';

// const httpLink = createHttpLink ({
//   uri: "https://quiet-cliffs-27491.herokuapp.com/graphql"
// })

const httpLink = createHttpLink({
uri: 'http://localhost:4000/graphql',
//cache: new InMemoryCache(),
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(true);

  const setToken = (data) => {
    setAuthToken(data);
    console.log('dt token', data);
    if (data) {
      localStorage.setItem('token', JSON.stringify(data));
    } else {
      localStorage.removeItem('token');
    }
    setLoadingAuth(false);
  };

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setToken, loadingAuth }}>   
        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path='' element={<Inicio />} />                          

              <Route path='auth' element={<AuthLayout />}>              
                <Route path='login' element={<Login />} />              
                <Route path='register' element={<Register />} /> 
              </Route>

            <Route path='/' element={<PrivateLayout />}>
              <Route path='' element={<Index />} /> 
              <Route path='usuarios' element={<IndexUsuarios />} />
              <Route path='usuarios/editar/:_id' element={<EditarUsuario />} />
              <Route path='index/category1/' element={<Category1 />} />  
              <Route path='proyectos' element={<IndexProyectos />} />
              <Route path='proyectos/nuevo' element={<NuevoProyecto />} />               
            </Route>
            
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;