const { Router } = require('express');
const EmployeeController = require('../controller/EmployeeController');

const routes = Router();

routes.post('/employee/create', EmployeeController.createEmployee);
routes.get('/employee/all', EmployeeController.getAllEmployees);
routes.get('/employee/:id', EmployeeController.getEmployee);
routes.delete('/employee/delete/:id', EmployeeController.deleteEmployee);
routes.delete('/employee/deleteMany', EmployeeController.deleteEmployees);
routes.patch('/employee/update/:id', EmployeeController.updateEmployee);
module.exports = routes;
