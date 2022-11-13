const { Router } = require('express');
const EmployeeController = require('../controller/EmployeeController');

const routes = Router();

routes.post('/employee/create', EmployeeController.createEmployee);
routes.get('/employee/all', EmployeeController.getAllEmployees);
routes.get('/employee/:_id', EmployeeController.getEmployee);
routes.delete('/employee/delete/:id', EmployeeController.deleteEmployee);
routes.patch('/employee/update/:id', EmployeeController.updateEmployee);
module.exports = routes;
