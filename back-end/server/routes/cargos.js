const cargosController = require('../controllers').cargos;
const md_auth = require('../authenticated/authenticated');

module.exports = (app) => {
    app.post('/api/cargo', cargosController.create);
    app.put('/api/cargo/:id', cargosController.update);
    app.get('/api/cargos', cargosController.getAllCargos);
    app.get('/api/cargo/:id', cargosController.getById);
    app.delete('/api/cargo/:id', cargosController.del);
    app.get('/api/treecargos', cargosController.getAllCargos);
    app.get('/api/cargos', cargosController.getAllEmpleados);
    app.get('/api/cargos', cargosController.getAllDependencias);
    app.get('/api/cargos2', cargosController.getAllCargos2);
}