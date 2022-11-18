var express = require('express');
var router = express.Router();
var validations = require("../middlewares/validations")
var indexController = require("../controllers/indexController")


router.post('/register',validations,indexController.registrando );