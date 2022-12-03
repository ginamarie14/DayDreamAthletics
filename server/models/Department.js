const { Schema, mongoose } = require('mongoose');

const departmentSchema = new Schema({
  name: {
    type: String,
    //required: true,
    trim: true,
  },
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
