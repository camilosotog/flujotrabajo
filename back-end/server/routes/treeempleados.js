const empleadosController = require('../controllers').empleados;
const md_auth = require('../authenticated/authenticated');

module.exports = (app) => {
    app.post('/api/empleado', md_auth.auth, empleadosController.create);
    app.put('/api/empleado/:id', md_auth.auth, empleadosController.update);
    app.get('/api/treeempleados', empleadosController.getAll);
}