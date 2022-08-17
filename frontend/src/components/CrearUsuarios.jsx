import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const CrearUsuarios = () => {

    const valorInicial = {
        nombre: "",
        apellido: "",
        edad: 0,
        telefono: 0,
        correo: ""
    }

    // El estado inicial del formulario es volorInicial
    
    const [usuario, setUsuario] = useState(valorInicial)

    //Capturamos los datos (name, value) de lo que se va escribiendo en los inputs y actualizamos el estado

    const capturarDatos = (e) => {
        const {name, value} = e.target
        setUsuario({...usuario,
                    [name]: value
        })
    }

    //Hacemos una peticion POST a traves de axios para guardar los datos de los usuarios y asi crear uno nuevo. Luego restablecemos el valor inicial de los inputs (estado).

    const guardarDatos = async(e) => {
        e.preventDefault();

        const newUser = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            telefono: usuario.telefono,
            correo: usuario.correo
        }
        await axios.post('http://localhost:4000/api/usuarios', newUser)
        
        setUsuario({...valorInicial})
    }


    return (
    <div className='col-md-6 offset-md-3'>
        <div className="card card-body">
            <form onSubmit={guardarDatos}>
                <h2 className='text-center mb-3'>Crear Usuario</h2>
                <div className='mb-3'>
                    <label>
                        Nombre
                    </label>
                    <input 
                        type="text" 
                        className='form-control' 
                        placeholder='Ingresar el nombre del usuario' 
                        name='nombre'
                        value={usuario.nombre}
                        onChange={capturarDatos}
                        required
                        />
                
                </div>
                <div className='mb-3'>
                    <label>
                        Apellido
                    </label>
                    <input 
                        type="text" 
                        className='form-control' 
                        placeholder='Ingresar el apellido del usuario' 
                        name='apellido'
                        value={usuario.apellido}
                        onChange={capturarDatos}
                        required
                        />
                </div>
                <div className='mb-3'>
                    <label>
                        Edad
                    </label>
                    <input 
                        type="number" 
                        className='form-control' 
                        placeholder='Ingresar la edad del usuario' 
                        name='edad'
                        value={usuario.edad}
                        onChange={capturarDatos}
                        required
                        />
                </div>
                <div className='mb-3'>
                    <label>
                        Telefono
                    </label>
                    <input 
                        type="number" 
                        className='form-control' 
                        placeholder='Ingresar la telefono del usuario' 
                        name='telefono'
                        value={usuario.telefono}
                        onChange={capturarDatos}
                        required
                        />
                </div>
                <div className='mb-3'>
                    <label>
                        Correo
                    </label>
                    <input 
                        type="text" 
                        className='form-control' 
                        placeholder='Ingresar el correo del usuario' 
                        name='correo'
                        value={usuario.correo}
                        onChange={capturarDatos}
                        required
                        />
                </div>
                <button className='btn btn-primary form-control'>
                    Guardar Usuario
                </button>
            </form>

        </div>
    </div>
    )
}

export default CrearUsuarios



