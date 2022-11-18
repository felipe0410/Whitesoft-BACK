/* const db = require("../database/models"); */
const { validationResult } = require("express-validator");

const indexController = {
  registrando: async function (req, res, next) {
    const resultValidation = validationResult(req);
    console.log(resultValidation)
    if (resultValidation.errors.length > 0) {
      return res.render('./user/registro', {errors:resultValidation.mapped(), oldData:req.body});
    }
    db.usuario.create({
      Nombres: req.body.nombre,
      Apellidos: req.body.apellidos,
      Email: req.body.correo,
      Contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
    }).then(function () {
      res.redirect('http://localhost:3000/')
    })
  }
}

module.exports = indexController;