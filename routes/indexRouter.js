var express = require('express');
var router = express.Router();
var validations = require("../middlewares/validations")
var indexController = require("../controllers/indexController")

router.get('/',indexController.index );
router.post('/register',validations,indexController.registrando );

module.exports = router;
