const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {q, nombre = 'No name', api_key, page = "1", limit} = req.query;

    res.json({
        msg:'get API',
        q:q,
        nombre:nombre,
        api_key:api_key,
        page:page,
        limit:limit
    });
}
const usuariosPost = (req, res = response) => {

    const body = req.body;
    res.json({
        msg:'Post API',
        body
    });
}
const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg:'Put API',
        id:id
    });
}
const usuariosDelete = (req, res = response) => {

    res.json({
        msg:'Delete API'
    });
}
const usuariosPatch = (req, res = response) => {

    res.json({
        msg:'Patch API'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}