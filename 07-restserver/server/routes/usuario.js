const express = require('express')
const Usuario = require('../models/usuario')

const app = express()

const bcrypt = require('bcrypt');
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

const _ = require("underscore")


app.get('/usuario', function (req, res) {

    let desde = req.query.desde || 0
    desde = Number(desde)

    let limite = req.query.limite || 0
    limite = Number(limite)    
    

    //Lista de Campos que se requiere enviar.
    Usuario.find({ estado:true }, "nombre email role estado google img")
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
        if (err) {
            res.status(400).json({ok: false, err})
        }

        Usuario.count({estado:true}, (err, total )=> {

            return res.json({ok: true, usuarios, total})

        })

        

    })

    //         .skip(desde)
    //         .limit(5)
    //         .exec((err, usuarios) => {

    //             if (err) {
    //                 return res.json(400).send({ok: false, err})
    //             }

    //             return res.json({
    //                 ok: true, usuarios
    //             })

    //         }  )

    


})


// Insertar Registro
app.post('/usuario', function (req, res) {
    
    let body = req.body
    
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, saltRounds),
        role: body.role
    })
    

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({ok: false, err})
        }

        //usuarioDB.password = null

        res.json({
            ok: true, usuario: usuarioDB
        })

    })


})

// Actualizar Registro con un Id
app.put('/usuario/:id', function (req, res) {
    let id = req.params.id
    
    
    let body = _.pick(req.body, ["nombre","email","img","role","estado"] )

    


    // Esto Ayuda a no actualizar los campos que no son necesario - pero es ineficiente
    // Si son muchos campos esto es no mantenible
    // delete body.password
    // delete body.google

    //res.json({id})

    Usuario.findByIdAndUpdate(id, body, {new: true, runValidators: true}, (err, usuariodb) => {
        if (err) {
            return res.status(400).json({
                ok: false, err
            })
        }


        res.json({ok: true, usuario: usuariodb})


    })


    // Usuario.findById(id, (err, usuarioDB) => {
    //     //usuarioDB.save()

    // })

    // res.json({id})


})
  
app.delete('/usuario/:id', function (req, res) {

    let id = req.params.id

    let ObjectBody = {estado: false}

    
    Usuario.findByIdAndUpdate(id, ObjectBody, {new: true}, (err, usuarioDeleted)=> {
    //Usuario.findByIdAndDelete(id, (err, usuarioDeleted)=> {

        if (err) {
            return res.status(400).json({
                ok: false, err
            })
        }

        if (!usuarioDeleted) {
            return res.status(400).json({
                ok: false, err: {
                    message: "Usuario No Encontrado"

                }
            })


        }

        res.json({
            ok: true, usuario: usuarioDeleted
        })


    })





    //res.json('delete usuario')
})


module.exports = app




