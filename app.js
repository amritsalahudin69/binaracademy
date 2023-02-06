const ErrorResponse = require("./helpers/response.helper")
const Response = require("./helpers/response.helper")
const express = require('express')

const app = express()
const itemProduk = require('./routers/produk.route')
const userLog = require('./routers/user.route')
const transaksi = require('./routers/transaksi.route')

app.use(express.json()) 

app.use('/', itemProduk);
app.use('/', userLog);
app.use('/', transaksi);

// Model (sequelize)
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(err.status).json({
        status: false,
        data: {},
        error: err.error
    })
})

app.use('/', (req, res)=>{ 
    const data = 'Data Not Found!'
    return new ErrorResponse (res, 400, data)
})

module.exports = app