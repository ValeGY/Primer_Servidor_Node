import express from "express";
import debug from "debug";
import env from "env-var";
import {config} from "dotenv";

//Mensaje claro consola
const mensaje = debug("app: carpeta app.js: ");

//complementa a env
config();
const app = express();
const port = env.get("PuertoReferencia").required().asIntPositive();

mensaje("Este es el puerto de mi de entorno virtual "+port);

app.get('/', (req, res) => {
   // res.status(200).json({message:"Hola primer servidor"})
   res.status(200).send("<h1> prueba 1 </h1><br><h2> prueba 1 </h2>")

});

app.get('/Valeria', (req, res) => {
   // res.status(200).json({message:"Hola primer servidor"})
   res.status(200).send("Segunda URL")

});

app.get('/Maximiliano', (req, res) => {
   // res.status(200).json({message:"Hola primer servidor"})
   res.status(200).send("esto es una priueba de una tercera URL")

});

app.listen(port, () => {
    mensaje("Servidor iniciado con éxito en http://localhost:" + port);
});

