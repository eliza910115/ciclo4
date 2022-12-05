require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const ordenes = require("./routes/ordenes");
const users = require("./routes/users");
const jwt = require("./routes/jwt");
const config = require("./configs/config");
//const logger = require("morgan");

// Conexion a la base de datos
connection();
// middlewares
app.use(express.json());
app.use(cors());



app.use(express.urlencoded({ extended: true }));

//app.use(logger());
// routes
app.use("/api/ordenes", ordenes);
app.use("/api/users", users);
app.use("/api/login", jwt);

// puerto
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Escuchando sobre el puerto ${port}`));