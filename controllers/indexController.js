/* const db = require("../database/models"); */
const { validationResult, body } = require("express-validator");

const indexController = {
    registrando: async function (req, res, next) {
        const resultValidation = validationResult(req);
        /* console.log(body("contraseña")) */
        console.log(req.body)
        if (resultValidation.errors.length > 0) {
            return res.send({errors: resultValidation.mapped(),oldData: req.body })
            /* return res.render('./user/registro', {errors:resultValidation.mapped(), oldData:req.body}); */
        } else {
            return res.send({ errors: resultValidation.mapped(), oldData: req.body })
        }

    }
}

module.exports = indexController;