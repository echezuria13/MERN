//Aqui se hara la cadena de conexion para conectar al servidor con la base de datos

const mongoose = require('mongoose')

//creamos la cadena de conexion 

    const URI = process.env.MONGODB_URI
                ? process.env.MONGODB_URI
                : 'mongodb://localhost/dbtest'
    

    //mongoose.connect(process.env.MONGODB_URI)
    //.then((res) => console.log("connected"))
    //.catch((e) => console.log("error: " + e));
    
    mongoose.connect(URI)                                                          
    const connection = mongoose.connection;
    
    connection.once('open', () => {
        console.log('la base de datos a sido conectada: ', URI);
    })

