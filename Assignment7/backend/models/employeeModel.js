const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  phone: { type: String, required: true },
  joiningDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);
