module.exports = (sequelize, DataTypes) => {
    const cargos = sequelize.define('cargos', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        descripcion: DataTypes.STRING,
        codigo:DataTypes.INTEGER,
        nombre:DataTypes.STRING,
        fk_empleado:DataTypes.INTEGER,
        fk_dependencia:DataTypes.INTEGER,
        fk_cargo:DataTypes.INTEGER,
        extension:DataTypes.INTEGER

    });

    return cargos;
}