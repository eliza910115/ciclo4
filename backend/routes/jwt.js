const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../configs/config");
const router = express.Router();
const { User, validator } = require("../models/users");
const asyncHandler = require("../middleware/asyncHandler");


app = express();

app.set("llave", config.llave);

router.post("/autenticar", async(req, res) => {

    const user = await User.find({ username: req.body.user });
    console.log(user)
    console.log(user[0].username, user[0].pass)
    if (req.body.user == user[0].username && req.body.password == user[0].pass) {
        const payload = {
            check: true,
        };
        const token = jwt.sign(payload, app.get("llave"), { expiresIn: 1440 });
        res.json({
            mensaje: "Autenticacion correcta",
            token: token,
        });
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos" });
    }
});

const rutasPortegidas = express.Router();

rutasPortegidas.use((req, res, next) => {
    const token = req.headers["access-token"];
    if (token) {
        jwt.verify(token, router.get("llave"), (err, decoded) => {
            if (err) {
                return res.json({ mensaje: "Token Invalida" });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            mensaje: "token no entregado",
        });
    }
});

router.get("/datos", rutasPortegidas, (req, res) => {
    const datos = [
        { nombre: "Armando", correo: "aa@gmail.com" },
        { nombre: "Milena", correo: "mm@gmail.com" },
        { nombre: "Patricia", correo: "p@gmail.com" },
    ];
    res.json(datos);
});



module.exports = router;