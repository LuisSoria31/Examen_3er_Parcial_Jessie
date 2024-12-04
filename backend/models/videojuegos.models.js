import { Schema, model } from "mongose";

const Esquema1 = new schema({
    name: {
        type:String
    },
    price: {
        type:Number
    }
})

export const modelo1 = new model("Tabla de Videojuegos", Esquema1)