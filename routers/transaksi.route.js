const router = require('express').Router();
const {transaksiController} = require('../controllers/transaksi.controller');

const transCon = new transaksiController();

router.get('/transaksi', transCon.getTransAll);
router.post('/transaksi', transCon.belanjaController)
router.post('/transaksi/bayar', transCon.bayarBelanja)

router.get('/cekstatus/:id', transCon.cekStatusBelanjaByKodetransaksi)

router.get('/belanjaterussampaimati/:id', transCon.histBelanja)


module.exports = router