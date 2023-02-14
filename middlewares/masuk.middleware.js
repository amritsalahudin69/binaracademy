const ErrorResponse = require("../helpers/error.helper")
const Response = require("../helpers/response.helper")
const jwt = require('jsonwebtoken')

require('dotenv').config();
const JWT_Key = process.env.JWT_Key;

function auth (req, res, next){
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    const token = authHeader(' ')[1];
    if(authHeader){
        jwt.verify(token, JWT_Key,(error, User)=>{
            if(error){
                throw new ErrorResponse(403, 'Token Invalid!')
            }
            req.user = User;
            next();
        })
    }else{
        throw new ErrorResponse(401, 'Token Invalid!')
    }
    return new Response(res, 200, authHeader);
}

module.exports= {
    auth
}