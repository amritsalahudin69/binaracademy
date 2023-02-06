const Joi = require('joi')

const loginSchema = Joi.object({
    useremail: Joi.string().email().required(),
    userpass: Joi.string().required(),
}).required()

module.exports = {loginSchema}