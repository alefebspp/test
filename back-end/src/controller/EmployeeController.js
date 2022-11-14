const Employee = require('../model/Employee');

module.exports = {
  async getAllEmployees(req, res) {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async getEmployee(req, res) {
    const { id } = req.params;
    const employee = await Employee.findOne({ _id: id });
    try {
      if (!employee) {
        res.status(400).json(console.log('Could not find employee!'));
      }
      res.status(200).json(employee);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async createEmployee(req, res) {
    const { firstName, lastName, age, profession, sector } = req.body;
    const employee = new Employee({
      firstName: firstName,
      lastName: lastName,
      age: age,
      profession: profession,
      sector: sector
    });
    try {
      await employee.save();
      res.status(200).json(employee);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async deleteEmployee(req, res) {
    const { id } = req.params;
    const employee = await Employee.findOne({ _id: id });
    try {
      if (!employee) {
        res.status(400).json(console.log('Could not find employee!'));
      }
      const deletedEmployee = await Employee.deleteOne({ _id: id });
      res.status(200).json(deletedEmployee);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async deleteEmployees(req, res) {
    try {
      const { ids } = req.body;
      const deletedEmployees = await Employee.deleteMany({
        _id: { $in: ids }
      });
      res.status(200).json(deletedEmployees);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async updateEmployee(req, res) {
    const { id } = req.params;
    const { firstName, lastName, age, profession, sector } = req.body;
    const data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      profession: profession,
      sector: sector
    };
    const employee = await Employee.findOne({ _id: id });
    try {
      if (!employee) res.status(401).json('Could not find employee!');
      else {
        const updatedEmployee = await Employee.updateOne(employee, data);
        res.status(201).json(updatedEmployee);
      }
    } catch (error) {
      res.status(401).json(error);
    }
  }
};
