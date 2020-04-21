const dependenciasController = require('../controllers').dependencias;
const md_auth = require('../authenticated/authenticated');

module.exports = (app) => {
    app.post('/api/dependencia', dependenciasController.create);
    app.put('/api/dependencia/:id', dependenciasController.update);
    app.get('/api/dependencias', dependenciasController.getAllDependencias);
    app.get('/api/dependencia/:id', dependenciasController.getById);
    app.get('/api/treedependencias', dependenciasController.getAllDependencias);
    app.delete('/api/dependencia/:id', dependenciasController.del);
    app.get('/api/dependencias', dependenciasController.getAllEmpleados);
    app.get('/api/dependencias', dependenciasController.getAllCargos);
    app.get('/api/dependencias2', dependenciasController.getAllDependencias2);
}