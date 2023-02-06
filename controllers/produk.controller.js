const ErrorResponse = require("../helpers/error.helper")
const Response = require("../helpers/response.helper")

const {Produk, Harga, sequelize} = require('../database/models'); 

class produkController{
    
    // get produk
    async getProduk(req, res, next){
          try{          
          const data = await Produk.findAll({
              attributes: ['nameprod', 'avail_', 'code', 'stock_'],
                 include:[{
                    model : Harga,
                    attributes :['hjp'],
                     }]
            })
            return new Response(res, 200, data);
            } catch (error) {
                next(error)
        }
    }

    // get produk by id
    async getProdukbyId(req, res, next){
        try{          
            const id = req.params.id;
            const data = await Produk.findAll({
                where:{'id' : id},
                attributes:['id','nameprod', 'avail_', 'code', 'stock_'],
                include:[{
                        model : Harga,
                        attributes :['hjp'],
                        }]
            })
          return new Response(res, 200, data);
          } catch (error) {
              next(error)
      }
  }

  async insertProduk(req, res, next){
    try {
        const nameprod = req.body.name;
        const stock_= req.body.stok;
        const code = req.body.sku;
        const hpp= req.body.hpp;
        const hjp= req.body.hjp;
        const prod ={
            nameprod: nameprod,
            stock_: stock_,
            code : code,
            avail_: 1
        }
        const dataprod = await Produk.create(prod);
        
        const harga= {
            id_product: dataprod.id,
            hpp: hpp,
            hjp: hjp,
            avail_: 1 //defult value
        }
        const dataharga = await Harga.create(harga);

        const data ={
            dataprod : dataprod,
            dataharga: dataharga
        }

        return new Response(res, 201, data)
    } catch (error) {
        next(error)
    }
  }

  async updateProduk(req,res,next){
    try {
        const idproduk = req.params.id;

        const nameprod = req.body.name;
        const stock_= req.body.stok;
        const code = req.body.sku;
        const prod ={
            nameprod: nameprod,
            stock_: stock_,
            code : code,
        }
        await Produk.update(prod,{
            where:{'id': idproduk}
        })
        return new Response(res, 201, 'berhasil')
        
    } catch (error) {
        next(error)
    }
  }

}

module.exports = {produkController}