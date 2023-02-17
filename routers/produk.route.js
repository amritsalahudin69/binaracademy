const router = require('express').Router()
const {produkController} = require('../controllers/produk.controller')

const produkCon = new produkController();
const authMiddleware = require('../middlewares/authorization.middleware')

router.get('/produk', authMiddleware.auth, produkCon.getProduk);
router.get('/produk/:id', authMiddleware.auth,produkCon.getProdukbyId);
router.post('/produk', authMiddleware.auth,produkCon.insertProduk );
router.put('/produk/:id', authMiddleware.auth,produkCon.updateProduk);


module.exports =router