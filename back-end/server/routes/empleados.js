const empleadosController = require('../controllers').empleados;
const md_auth = require('../authenticated/authenticated');

module.exports = (app) => {
    app.post('/api/empleado', empleadosController.create);
    app.put('/api/empleado/:id', empleadosController.update);
    app.get('/api/empleados', empleadosController.getAll);
    app.get('/api/treeempleados', empleadosController.getAll);
    app.get('/api/empleado/:id', empleadosController.getById);
    app.delete('/api/empleado/:id', empleadosController.del);
    app.get('/api/empleados2', empleadosController.getAll2 );
}