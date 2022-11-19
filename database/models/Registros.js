
module.exports = (sequelize, dataTypes) => {
    let alias = "Registros";
    let cols = {
        idRegistro: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING
        },
        
        apellidos: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        },
        correo: {
            type: dataTypes.STRING
        },   
    }
    let config = {
        tableName: "Registros",
        timestamps: false
    }
    const Registros = sequelize.define(alias, cols, config);
    return Registros;
}