module.exports = app => {
    const movies = require("../controllers/movie.controller.js");
    var router = require("express").Router();
   //Nueva Pelicula
    router.post("/create/", movies.create);
    //Obtener todas las peliculas
    router.get("/", movies.getAll);
    //Obtener por nombre de pelicula
    router.get("/", movies.getByName);
    //Actualizar Pelicula
    router.put("/update/:id", movies.update);
    //Eliminar Pelicula
    router.delete("/delete/:id", movies.delete);
    app.use("/api/movies", router);
};