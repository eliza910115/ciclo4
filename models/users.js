const mongoose = require('mongoose');
const Joi = require('joi');

const usersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
});

const User = mongoose.model("users", usersSchema);

const validator = (data) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        pass: Joi.string().required(),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        mobile: Joi.string()
            .length(10)
            .regex(/^\d+$/)
            .message({ "string.pattern.base": "Por favor digite un numero valido" })
            .required()


    })
    return schema.validate(data)
};

module.exports = { User, validator };