const express = require("express");
const router = express.Router();
const { User, validator } = require("../models/users");
const validate = require("../middleware/validate");
const isValidObjectId = require("../middleware/isValidObjectId");
const asyncHandler = require("../middleware/asyncHandler");

// Crear un cliente
router.post(
    "/registro",
    validate(validator),
    asyncHandler(async(req, res) => {
        await User(req.body).save();
        res.status(200).send("Cliente creado");
    })
);

// Obtener todos los clientes
router.get(
    "/",
    asyncHandler(async(req, res) => {
        const users = await User.find();
        res.send(users);
    })
);

//Obtener  cliente por id
router.get(
    "/:id",
    isValidObjectId,
    asyncHandler(async(req, res) => {
        const user = await User.findById(req.params.id);
        res.json(user);
    })
);

// Update
router.put(
    "/:id",
    isValidObjectId,
    asyncHandler(async(req, res) => {
        await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.status(200).send("actualizacion exitosa");
    })
);

// Delete
router.delete(
    "/:id",
    isValidObjectId,
    asyncHandler(async(req, res) => {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("borrado exitoso");
    })
);

module.exports = router;