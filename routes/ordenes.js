const express = require("express");
const router = express.Router();
const { Ordenes, validator } = require("../models/ordenes");
const validate = require("../middleware/validate");
const isValidObjectId = require("../middleware/isValidObjectId");
const asyncHandler = require("../middleware/asyncHandler");

// Crear un cliente
router.post(
    "/",
    validate(validator),
    asyncHandler(async(req, res) => {
        await Ordenes(req.body).save();
        res.status(200).send("Orden creada");
    })
);

// Obtener todos los clientes
router.get(
    "/",
    asyncHandler(async(req, res) => {
        const ordenes = await Ordenes.find();
        res.send(ordenes);
    })
);

//Obtener  cliente por id
router.get(
    "/:id",
    isValidObjectId,
    asyncHandler(async(req, res) => {
        const ordenes = await Ordenes.findById(req.params.id);
        res.json(ordenes);
    })
);

// Update
router.put(
    "/:id",
    isValidObjectId,
    asyncHandler(async(req, res) => {
        await Ordenes.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.status(200).send("actualizacion exitosa");
    })
);

// Delete
router.delete(
    "/:id",
    isValidObjectId,
    asyncHandler(async(req, res) => {
        await Ordenes.findByIdAndDelete(req.params.id);
        res.status(200).send("borrado exitoso");
    })
);

module.exports = router;