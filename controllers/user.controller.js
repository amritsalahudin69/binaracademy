const ErrorResponse = require("../helpers/error.helper")
const Response = require("../helpers/response.helper")

const {User, Enduser, UserStatus, Kontak, sequelize} = require('../database/models'); 
const { validate } = require("../middlewares/validation.middleware")
const { registerSchema } = require("../validations/schemas/register.schema")
const { loginSchema } = require("../validations/schemas/login.schema")

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config;
const JWT_Key = process.env.JWT_Key

class userController{

    async daftar(req, res, next){
        try {
            const dftr ={
                useremail : req.body.Email,
                username : req.body.Nama,
                userpass : req.body.Password
            }
            await validate(registerSchema, dftr)

            const cekUser = await User.findOne({
                where :{useremail: dftr.useremail},
                attributes:['id']
            })

            if(cekUser){
                throw new ErrorResponse(400, 'Email sudah terdaftar')
            }
            
            const psenc = await bcrypt.hash(dftr.userpass, 10)

            const user = await User.create({
                useremail : dftr.useremail,
                username : dftr.username,
                userpass : psenc,
                id_status: 3
            })

            const data = {
                Pesan: "User berhasil dibuat",
                DataUser : {
                    UserName : user.username,
                    Email: user.useremail
                }
            }

            return new Response(res, 200, data);
        } catch (error) {
            next(error)
        }
    }

    async masuk(req, res, next){
        try {
            const login ={
                useremail : req.body.Email,
                userpass : req.body.Password
            }

            const h = req.header.authorization;
            console.log(h);
            await validate(loginSchema, login);
            const pps = await User.findOne({
                where :{useremail: login.useremail},
                attributes:['userpass'],
            });
            const dataPengguna = await User.findOne({
                where :{useremail: login.useremail},
                attributes:['id', 'useremail','username'],
                include:[
                    {
                        model : Enduser,
                        attributes :['name_', 'idcard', 'primephone'],
                    },
                    {
                        model:UserStatus,
                        attributes: ['name_', 'desc_', 'level_']
                    },
                    {
                        model: Kontak,
                        attributes:['nameadd', 'addr'],
                    }
                ]
            })

            let data = await bcrypt.compare(login.userpass, pps.userpass)
            
            const jwtPaylod ={
                user_id: dataPengguna.id,
                email: dataPengguna.useremail
            }
            const accessToken = jwt.sign(jwtPaylod, JWT_Key, {expiresIn: 86400})
            
            if(data){ 
                data = {
                    msg :"Login Berhasil!",
                    Token: accessToken,
                    dataPengguna
                }
            }
            return new Response(res, 200, data);
        } catch (error) {
            next(error)
        }
    }

}

module.exports = {userController}