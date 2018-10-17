var express = require('express');
var router = express.Router();
var Task=require('../models/UserModel');
var restMvc = require('../controllers/restMvc');
router.get('/create', restMvc.create);
router.get('/:id?', restMvc.index);
module.exports = router;