const mongoose = require('mongoose');
const Joi = require('joi');

const ordenesSchema = mongoose.Schema({
    numero_orden: {
        type: Number,
        required: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now,
        required: true
    },
    remitente: {
        type: String,
        required: true
    },
    ciudad_remitente: {
        type: String,
        required: true
    },
    direccion_remitente: {
        type: String,
        required: true
    },
    destinatario: {
        type: String,
        required: true
    },
    ciudad_destinatario: {
        type: String,
        required: true
    },
    direccion_destinatario: {
        type: String,
        required: true
    },
    direccion_destinatario: {
        type: String,
        required: true
    },
    observaciones: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: false,
        default: "creada",
    },
});

const Ordenes = mongoose.model("ordenes", ordenesSchema);

const validator = (data) => {
    const schema = Joi.object({
        numero_orden: Joi.number().required(),
        remitente: Joi.string().required(),
        ciudad_remitente: Joi.string().required(),
        direccion_remitente: Joi.string().required(),
        destinatario: Joi.string().required(),
        ciudad_destinatario: Joi.string().required(),
        direccion_destinatario: Joi.string().required(),
        observaciones: Joi.string().required(),
        estado: Joi.string()
    })
    return schema.validate(data)
};

module.exports = { Ordenes, validator };