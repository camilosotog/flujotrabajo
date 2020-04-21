module.exports = (sequelize, DataTypes) => {
    const empleados = sequelize.define('empleados', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: DataTypes.STRING,
        num_identificacion:DataTypes.INTEGER,
        email:DataTypes.STRING

    });

    return empleados;
}