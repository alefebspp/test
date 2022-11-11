const { Router } = require('express');
const EmployeeController = require('../controller/EmployeeController');

const routes = Router();

routes.post('/employee/create', EmployeeController.createEmployee);

module.exports = routes;
