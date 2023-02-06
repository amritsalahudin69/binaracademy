const router = require('express').Router()
const {produkController} = require('../controllers/produk.controller')

const produkCon = new produkController();

router.get('/produk', produkCon.getProduk);
router.get('/produk/:id', produkCon.getProdukbyId);
router.post('/produk', produkCon.insertProduk );
router.put('/produk/:id', produkCon.updateProduk);


module.exports =router