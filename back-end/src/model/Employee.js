import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  profession: { type: String, required: true },
  sector: { type: String, required: true }
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
