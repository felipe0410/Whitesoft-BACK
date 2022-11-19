const { body } = require('express-validator');
var path = require('path');
const validations = [
    body("nombre").notEmpty().withMessage("Debes escribir un NOMBRE").bail()
    .isLength({ min: 5 ,max: 40 }).withMessage('el NOMBRE debe ser de 5 caracteres como minimo'),
    body("apellidos").notEmpty().withMessage("Debes escribir un APELLIDO "),
    body("correo").notEmpty().withMessage('Tienes que escribir un email').bail()
    .isEmail().withMessage('Debes escribir un email valido'),
    body("contraseña").notEmpty().withMessage("Debes escribir una contraseña").bail()
    .isLength({ min: 8 ,max: 8 }).withMessage('La contraseña debe ser de 8 caracteres'),
];
module.exports = validations;