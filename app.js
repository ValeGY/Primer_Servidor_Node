/* 
Este es un servidor básico de express con node.js (Js)

Existen 3 tipos de variables en Js: 
const = esta es una variable constante, su principal caracteristica es que es inmutable, esto significa que su valor no cambia. 
let = Esta es una variable que su valor puede cambiar y se usa principalmente en funciones
var = Esta es una variable que su contenia varia, que no tiene un valor único. 
*/

// Aquí se importan las librerias para el proyecto 
import express from "express"; 
import debug from "debug";
import env from "env-var";
import {config} from "dotenv";

//Esta constante llamada mensaje genera un log en la consola 
const mensaje = debug("app: carpeta app.js: ");

//config() = esto ayuda a acceder a mi entorno virtual 
config();

// Esta constante contiene todo lo necesario de la libreria express para armar un servidor 
const app = express();

// Esta constante contiene el puerto del servidor traido desde la variable de entorno 
const port = env.get("PuertoReferencia").required().asIntPositive();

// log para saber el puerto del servidor 
mensaje("Este es el puerto de mi de entorno virtual "+port);

// Estructura básica para generar un endpoint(URL del servidor)
app.get('/', (req, res) => {
   // res.status(200).json({message:"Hola primer servidor"})
   res.status(200).send("<h1> prueba 1 </h1><br><h2> prueba 1 </h2>")

});

// Estructura básica para generar un endpoint(URL del servidor)
app.get('/Valeria', (req, res) => {
   // res.status(200).json({message:"Hola primer servidor"})
   res.status(200).send("Segunda URL")

});

// Estructura básica para generar un endpoint(URL del servidor)
app.get('/Maximiliano', (req, res) => {
   // res.status(200).json({message:"Hola primer servidor"})
   res.status(200).send("esto es una priueba de una tercera URL")

});

// Estructura básica para generar un endpoint(URL del servidor)
app.get('/Maximiliano', (req, res) => {
   // res.status(200).json({message:"Hola primer servidor"})
   res.status(200).send("esto es una priueba de una tercera URL")

});

// El método que levanta el servidor (esta es la última linea de codigo, en este proyecto, no hay nada más)
app.listen(port, () => {
    mensaje("Servidor iniciado con éxito en http://localhost:" + port);
});

