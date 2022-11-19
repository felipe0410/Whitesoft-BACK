
module.exports = (sequelize, dataTypes) => {
    let alias = "registro";
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
        tableName: "registro",
        timestamps: false
    }
    const registro = sequelize.define(alias, cols, config);
    return registro;
}