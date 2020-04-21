module.exports = (sequelize, DataTypes) => {
    const dependencias = sequelize.define('dependencias', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: DataTypes.STRING,
        codigo:DataTypes.INTEGER,
        fk_empleado:DataTypes.INTEGER,
        fk_dependencia:DataTypes.INTEGER,
        fk_cargo:DataTypes.INTEGER

    });

    return dependencias;
}