const Movie=require('../models/Movie.model')

module.exports.listMovies = (req, res, next) => {
    Movie.find()
    .then((movies)=>{
        console.log(movies)
        //1er parametro: vista - 2º parametro: datos que le mandamos a la vista la clave posts con el array de posts
        res.render('index',{movies:movies})
    })
    .catch(e=>console.log(e))
}
