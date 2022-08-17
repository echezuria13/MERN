import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

// logica para hacer la peticion PUT

const EditarUsuarios = () => {

    const valorInicial = {
        nombre: "",
        apellido: "",
        edad: 0,
        telefono: 0,
        correo: ""
    }
    
    //En este caso yo use el mismo nombre del estado (usuari, setUsuario) del otro componente (crear usuario) pero no tienen nada en comun (se puede usar otro nombre).

    // El estado inicial del formulario es volorInicial
    
    const [usuario, setUsuario] = useState(valorInicial)

    //Capturamos los datos (name, value) de lo que se va escribiendo en los inputs y actualizamos el estado

    const capturarDatos = (e) => {
        const {name, value} = e.target
        setUsuario({...usuario,
                    [name]: value
        })
    }
    
    // Una vez le damos click a EDITAR se envia un ID y nos vamos la pagina de editar. Una vez alli capturamos el ID con useParams() y procedemos hacer la petion get con axios del usuario segun el ID y eso es lo mostraremos en cada uno de los inputs.

    let {id} = useParams();
    const [subId, setSubId] = useState(id)
    
    const obtUno = async(subId) =>{ 
        const res = await axios.get(`http://localhost:4000/api/usuarios/${subId}`)
    
        setUsuario({
            nombre: res.data.nombre,
            apellido: res.data.apellido,
            edad: res.data.edad,
            telefono: res.data.telefono,
            correo: res.data.correo
        })
    }

    // Este useEffect lo que hace es verificar se subId (estado) esta lleno (lo que significa que hicieron click en EDITAR). Una ves se da cuenta de que el subId esta lleno lo que esta dento (es decir el ID) se le pasa como parametro a la funcion obtUno para que proceda hacer la peticion.

    useEffect(() =>{
        if(subId !== ''){
            obtUno(subId)
        }
    }, [subId])

    //Una vez modificamos los inputs, con esta funcion hacemos un PUT con axios a ese ID en el que estamos trabajando y se procede a reemplazar los datos. Se procede a restablecer el estado (usuario) y el estado subId tamnien lo restablecemos y lo colocamos vacio.

    const actualizarUser = async(e) =>{
        e.preventDefault()
        const actUser = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            telefono: usuario.telefono,
            correo: usuario.correo
        }
        await axios.put('http://localhost:4000/api/usuarios/' + subId, actUser)
        setUsuario({...valorInicial})
        setSubId("")
        //console.log(actUser)
    }


    return (
    <div className='col-md-6 offset-md-3'>
        <div className="card card-body">
            <form   onSubmit={actualizarUser}> 
                <h2 className='text-center mb-3'>Actualizar Usuario</h2>
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
                <button className='btn btn-danger form-control'>
                    Actualizar Usuario
                </button>
            </form>
        </div>
    </div>
    )
}

export default EditarUsuarios

