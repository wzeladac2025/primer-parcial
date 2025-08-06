const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            message: "No puede estar vacio."
        });
        return;
    }

    const movie = {
        nombre: req.body.nombre,
        sinopsis: req.body.sinopsis,
        actores: req.body.actores,
        duracion: req.body.duracion,
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        anio_lanzamiento: req.body.anio_lanzamiento
    };


    Movie.create(movie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error ocurrido al crear la pelicula."
            });
        });
};

exports.getAll = (req, res) => {
    Movie.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error ocurrido al obtener peliculas."
            });
        });
};

exports.getByName = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Movie.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error ocurrido al obtener peliculas."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Movie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pelicula Actualizada."
                });
            } else {
                res.send({
                    message: `No se actualizo pelicula con ID=${id}. Pelicula no existe o error en la peticion.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar pelicula con ID=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Movie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pelicula eliminada exitosamente"
                });
            } else {
                res.send({
                    message: `No se puede eliminar pelicula con ID=${id}. Pelicula no existe o error en la peticion.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar pelicula con ID=" + id
            });
        });
};