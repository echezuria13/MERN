
const {Router} = require('express');
const router =  Router();

const {getUsu, createUsu, getUsuario, deleteUsu, updateUsu} = require('../controller/usuario.controller')

router.route('/' )
    .get(getUsu) 
    .post(createUsu)

router.route('/:id')

    .get(getUsuario)
    .delete(deleteUsu)
    .put(updateUsu)


module.exports = router;
