import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'


const ListaUsuario = () => {

    //Aqui se va a guardar el estados de los usuarios que se van creando

    const [lista, setLista] = useState([])

    //Se crea un useEffect para que este escuchando constantemente cuando se cree un nuevo usuario y asi actualizar al estado con setLista y luego renderizar la pagina porque se actualizo el estado (lista).

    useEffect(() => {
        const getUsuarios = async() =>{
            const res = await axios.get('http://localhost:4000/api/usuarios')
            setLista(res.data)
        }
        getUsuarios()
    }, [lista])

    //A traves de esta peticion con axios se eliminan los usuarios. Una vez el usuario le de a ELIMINIAR se envia el ID del usuario (como parametro) al que le dieron click y se procese a eliminarlo.

    const eliminarUsuario = async(id) =>{
        await axios.delete(`http://localhost:4000/api/usuarios/${id}` /* 'http://localhost:4000/api/usuarios/' + id */)
    }

    return (
    <div className='row'>
        {
            lista.map(list => (
                <div className='col-md-4 p-2' key={list._id}>
                    <div className='card'>
                        <div className='card-header'>
                            <h5>Nombre: {list.nombre}</h5>
                        </div>

                        <div className='card-bady'>
                            <p>Apellido: {list.apellido}</p>
                            <p>Edad: {list.edad}</p>
                            <p>Telefono: {list.telefono}</p>
                            <p>Correo: {list.correo}</p>
                        </div>

                        <div className='card-footer'>
                            <button 
                                className='btn btn-danger'
                                onClick={() => eliminarUsuario(list._id)}
                                >
                                Eliminar
                            </button>
                            
                            
                            <Link className='btn btn-primary m-1' to={`/edit/${list._id}`}>
                                Editar
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    )
}

export default ListaUsuario