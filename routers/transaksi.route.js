const router = require('express').Router();
const {transaksiController} = require('../controllers/transaksi.controller');

const authMiddleware = require('../middlewares/authorization.middleware')
const transCon = new transaksiController();

router.get('/transaksi', authMiddleware.auth, transCon.getTransAll);
router.post('/transaksi', authMiddleware.auth, transCon.belanjaController)
router.post('/transaksi/bayar', authMiddleware.auth, transCon.bayarBelanja)
router.get('/cekstatus/:id', authMiddleware.auth, transCon.cekStatusBelanjaByKodetransaksi)
router.get('/belanjaterussampaimati/:id', authMiddleware.auth, transCon.histBelanja)


module.exports = router