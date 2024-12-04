import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controllers/videojuegos.controllers.";

dotenv.config()
mongose.connect(process.env.url_db)
.then(()=>{
    console.log("Funciona la Base de Datos")
})
.catch((error)=>{
    consol.log("No funciona ya salio", error)
})

const app = expresss();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha el servidor")
})
test