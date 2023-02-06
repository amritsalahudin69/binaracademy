const router = require('express').Router()
const {userController} = require('../controllers/user.controller')

const userCon = new userController();

router.post('/register', userCon.daftar);
router.post('/masuk', userCon.masuk);

module.exports =router