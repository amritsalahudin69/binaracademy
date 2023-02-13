const router = require('express').Router()
const {produkController} = require('../controllers/produk.controller')

const produkCon = new produkController();
const authMiddleware = require('../middlewares/masuk.middleware')

router.get('/produk', authMiddleware.auth, produkCon.getProduk);
router.get('/produk/:id', produkCon.getProdukbyId);
router.post('/produk', produkCon.insertProduk );
router.put('/produk/:id', produkCon.updateProduk);


module.exports =router