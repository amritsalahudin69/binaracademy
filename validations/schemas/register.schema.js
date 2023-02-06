const Joi = require('joi')

const registerSchema = Joi.object({
    useremail: Joi.string().email().required().min(5),
    username: Joi.string().min(8).required(),
    userpass: Joi.string().min(3).required()
}).required()

module.exports = {registerSchema}