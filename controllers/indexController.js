/* const db = require("../database/models"); */
const { validationResult, body } = require("express-validator");
const db = require("../database/models");


const indexController = {
    registrando: async function (req, res, next) {
        const resultValidation = validationResult(req);
        /* console.log(body("contraseña")) */
        console.log(req.body)
        if (resultValidation.errors.length > 0) {
            return res.send({result:resultValidation.mapped()})
            /* return res.render('./user/registro', {errors:resultValidation.mapped(), oldData:req.body}); */
        } db.Registros.create({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            contraseña: req.body.contraseña,
        }).then(
            function(){
                return res.send({db:"exito"})
            }
        )
    },

    index: function(req,res){

       return res.send("bienvenidos al back(node.js)")
    }
}

module.exports = indexController;