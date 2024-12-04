import { modelo1 } from "../models/videojuegos.models.js";

modelo1.create({
    name: "Need for Speed Most Wanted (2005)",
    pric: 800
})

export const test = () >{
    console.log("Si funciona el controlador")
}