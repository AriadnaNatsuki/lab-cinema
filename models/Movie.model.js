const mongoose = require('mongoose')

//Hacemos una instancia ¿del objeto Schema? ¿constructor?
const movieSchema = new mongoose.Schema(
    //Primer paramentro: constructor 
    {
        title: {
            type: String,
            require: true,
            unique: true
        },
        director: {
            type: String,
            require: true,
            unique: true
        },
        starts: {
            type: [String],
            require: true,
        },
        image: {
            type: String,
            require: true,
            unique: true
        },
        description: {
            type: String,
            require: true,
            unique: true
        },
        showtimes: {
            type: [String],
            require: true
        }
    },
    //Segundo parametro: objeto tinmestamps
    {
        timestamps: true
    }
)

//Registrar modelo
const Movie = mongoose.model('Movie', movieSchema)
//Exportamos el modelo
module.exports = Movie