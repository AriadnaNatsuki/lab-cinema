//Requerimos express,handlebars y morgan
const express = require('express')
const hbs = require('hbs')
const logger = require('morgan')
const routes=require('./config/routes')
//const path = require('path')
const createError=require('http-errors')
//Conexion con la BD
require('./config/db.config')
///Instanciamos express
const app = express()
//Exponer archivos estaticos
app.use(express.static('public'))
app.use(logger('dev'))
//Configuramos handlebars (¡OJO! dirname tiene delante 2 barras bajas __)
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')
//Requerimos los partials
hbs.registerPartials(__dirname + '/views')
//Le decimos a express que se quede con la rutas
app.use('/',routes)
//Error handler
app.use((req, res, next) => {
    next(createError(404))
})
app.use((error, req, res, next) => {
    console.log(error)
    if (!error.status) {
        error = createError(500)
    }
    res.status(error.status)
    res.render("error", error)
})
app.listen(3000, () => console.log('Listening on por 3000'))