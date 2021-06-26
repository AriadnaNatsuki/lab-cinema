//Grupo de rutas (routes)
const router = require('express').Router()
//Exportar los controladores (req,res,next)=>{res.render('index')}
const moviesController=require('../controllers/movies.controller')
//Definimos la ruta y Llamamos al controlador y le pasamos el metodo listMovies
router.get('/', moviesController.listMovies)
module.exports=router
