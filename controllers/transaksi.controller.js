const ErrorResponse = require("../helpers/error.helper")
const Response = require("../helpers/response.helper")
const kodeGen = require("../helpers/gen.helper")
const {Op} = require("sequelize")

const {Produk, Harga, Keranjang, Belanja, Transkasi, statusTransaksi, sequelize} = require('../database/models'); 
const transaksi = require("../database/models/transaksi.model");
const contact = require("../database/models/contact.model");
const { update } = require("../database/models/contact.model");

class transaksiController{
    //lihat semua transaksi
    async getTransAll(req,res,next){
        try {
            const rowdata= await Keranjang.findAll({
                attributes: ['id', 'id_user', 'avail_', 'nametroll'],
                include:[{
                    model: Belanja,
                    attributes:['grandtotal', 'qty']
                }]
            })
        return new Response(res, 200, rowdata);    
        } catch (error) {
            next(error)
        }
    }

    async belanjaController(req,res,next){
        
        try {
            const ix = {
                id_user: req.body.iduser,
                id_product: req.body.idproduk,
                qty: req.body.jumlah_barang
            }
            let cekKeranjang= await Keranjang.findOne({
                where:{id_user: ix.id_user, avail_: 1},
                attributes:['id', 'nametroll']
            })

            if(!cekKeranjang){
                let xx =  new kodeGen;
                let coTro = "T01"+xx.makeid(10);
                const inserttrolli ={ 
                    id_user: ix.id_user,
                    avail_: 1,
                    nametroll: coTro
                }
                cekKeranjang = await Keranjang.create(inserttrolli);
            }

            const cariproduk = await Produk.findOne({
                where:{id : ix.id_product, avail_:1},
                attributes:['nameprod', 'stock_'],
                include:[{
                    model: Harga,
                    attributes:['hjp']
                }]
            })
            if(parseInt(cariproduk.stock_) < 1){
                throw new ErrorResponse(400, 'Barang Habis!')
            }
            if(parseInt(cariproduk.stock_) < ix.qty){
                throw new ErrorResponse(400, 'Pesanan Melebihi Stock!')
            }

            let cariKodeTransaksi = await Belanja.findOne({
                where:{id_trolli: cekKeranjang.id, avail_: 1},
                attributes:['id_product','codetrans']
            })

            if(!cariKodeTransaksi){
                let xz =  new kodeGen;
                cariKodeTransaksi = "Trans"+xz.makeid(8);
            }else{
                cariKodeTransaksi = cariKodeTransaksi.codetrans  
            }

            let beli = {
                id_trolli: cekKeranjang.id,
                id_product: ix.id_product,
                codetrans: cariKodeTransaksi,
                grandtotal: ix.qty * parseInt(cariproduk.Price.hjp),
                qty: ix.qty,
                avail_:1
            }
            const pembelian = await Belanja.create(beli);

            const updateStock = await Produk.findOne({
                where:{id: pembelian.id_product},
                attributes:['id', 'stock_']
            });

            let xr = {
                stock_:parseInt(updateStock.stock_) - ix.qty
            }
            await Produk.update(xr,{
                where:{id: updateStock.id}
            })

            let cektransaksi = await Belanja.findAll({
                where:{id_trolli: pembelian.id_trolli, avail_: 1},
                include:{
                    model : Produk,
                    attributes : ['nameprod'],
                    include:{
                        model: Harga,
                        attributes:['hjp']
                    }
                },
                attributes:['qty','grandtotal']
            });

            let grt=0
            cektransaksi.forEach(tr => {
                grt += tr.grandtotal;
            });
               
            let Pembayaran = await Transkasi.findOne({
                where:{codetrans: cariKodeTransaksi, id_purcstatuses: 1},
                attributes:['id','codetrans', 'total_bayar']
            })
            
            let bayar = {
                id_purcstatuses : 1,
                codetrans: cariKodeTransaksi,
                id_user:ix.id_user,
                total_bayar: grt,
            }
            if(!Pembayaran){
                Pembayaran = await Transkasi.create(bayar);
            }else{
                await Transkasi.update(bayar,{
                    where:{id:Pembayaran.id}
                })
            }
            let pesan = {
                msg : "Belanja Berhasil! Silahkan melakukan Pembayaran dengan Menggunakan Kode Transaksi!",
                trx:{
                    KodeTransaksi : Pembayaran.codetrans,
                    TotalBayar : grt
                },
            }
            let tbelanja = await Belanja.findAll({
                where:{codetrans:Pembayaran.codetrans},
                attributes:['id_product','qty', 'grandtotal'],
                include:{
                    model:Produk,
                    attributes:['nameprod'],
                    include:{
                        model:Harga,
                        attributes:['hjp']
                    }
                }
            })

            let cetak ={
                pesan: pesan,
                detailBlanja: tbelanja
            }
            return new Response(res, 200, cetak);
        } catch (error) {
            next(error)
        }
    }

    async bayarBelanja(req,res, next){
        try {
            const xx = {
                codetrans: req.body.KodeTransaksi,
                total_bayar: req.body.TotalBayar
            }
            const cekKodeTrans = await Transkasi.findOne({
                where:{codetrans: xx.codetrans},
                attributes:['id_purcstatuses','codetrans', 'total_bayar']
            })
            if(!cekKodeTrans){
                throw new ErrorResponse(400, 'Kode Pembayaran Salah!')
            }
            if(cekKodeTrans.id_purcstatuses === 2){
                throw new ErrorResponse(400, 'Kode Pembayaran sudah Terbanyarkan! Tidak Dapat Dibayarkan kembali! Ajak Ayang Belanja Lagi kuyy')
            }
            if(xx.total_bayar > cekKodeTrans.total_bayar){
                throw new ErrorResponse(400, 'Jumlah Pembayaran Terlalu Kebanyakan Dab! ora nduwe susuk');
            }
            if(xx.total_bayar < cekKodeTrans.total_bayar){
                throw new ErrorResponse(400, 'Jumlah Pembayaran Kurang! Gass kon bayarke Ayang!'); 
            }
            if(xx.total_bayar === cekKodeTrans.total_bayar){
                let ustus = {
                    id_purcstatuses:2
                    }
                await Transkasi.update(ustus,{
                    where:{codetrans: xx.codetrans},
                    attributes:['id']
                })
            }
            let ie = {
                avail_:0
            }
            await Belanja.update(ie,{
                where:{codetrans:xx.codetrans},
            })
            let cekUB = await Belanja.findOne({
                where:{codetrans:xx.codetrans},
                attributes:['id_trolli']
            })
            await Keranjang.update(ie,{
                where:{id: cekUB.id_trolli}
            })
            const data = {
                status_:"Pembayaran Berhasil"
            }
            return new Response(res, 200, data);
            
        } catch (error) {
            next(error)
        }
    }

    async cekStatusBelanjaByKodetransaksi(req, res, next){
        try {
            const id = req.params.id;
            const data = await Transkasi.findOne({
                where:{codetrans:id},
                attributes:['codetrans', 'total_bayar'],
                include:{
                    model: statusTransaksi,
                    attributes:['namestatus']
                }
            })
            console.log(id);
            return new Response(res, 200, data);  
        } catch (error) {
            next(error)
        }
    }

    async histBelanja(req,res,next){
        try {
            const id = req.params.id;
            const tdata = await Transkasi.findAll({
                where:{id_user: id},
                attributes:['codetrans', 'total_bayar'],
                include:{
                    model:statusTransaksi,
                    attributes:['namestatus']
                }
            })

            let kdata= await Keranjang.findAll({
                where:{id_user:id},
                attributes: ['id'],
                include:{
                    model:Belanja,
                    attributes:['id', 'codetrans'],
                    include:{
                        model:Produk,
                        attributes:['nameprod']
                    }
                }
            })

            const data={
                Belanja:tdata,
                Detail:kdata,
            }


        return new Response(res, 200, data);    
        } catch (error) {
            next(error)
        }
    }
    
}

module.exports={transaksiController}