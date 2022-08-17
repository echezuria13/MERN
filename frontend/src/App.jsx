
// BACKEND BACKEND BACKEND

import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Navegacion from  './components/Navegacion'
import CrearUsuarios from './components/CrearUsuarios'
import ListaUsuario from './components/ListaUsuario'
import EditarUsuarios from './components/EditarUsuarios';

function App() {
  return (
    <div className="App">
        <Navegacion/>
        <div className='container p-4'>
          <Routes>
            <Route exact path='/' element={<ListaUsuario/>}/>
            <Route exact path='/CrearUsuario' element={<CrearUsuarios/>}/>
            <Route exact path='/edit/:id' element={<EditarUsuarios/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;


