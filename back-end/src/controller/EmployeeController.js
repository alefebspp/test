const Employee = require('../model/Employee');

module.exports = {
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
  }
};
