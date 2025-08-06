module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
        nombre: {
            type: Sequelize.STRING
        },
        sinopsis: {
            type: Sequelize.STRING
        },
        actores: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.INT
        },
        tipo: {
            type: Sequelize.STRING
        },
        categoria:{
            type: Sequelize.STRING
        },
        anio_lanzamiento: {
            type: Sequelize.INT
        }
    });
    return Cliente;
};