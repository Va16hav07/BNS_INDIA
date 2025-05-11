const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schoolInfoSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true
  },
  schoolCode: {
    type: String,
    required: true,
    unique: true
  },
  schoolType: {
    type: String,
    required: true
  },
  schoolBoard: {
    type: String,
    required: true
  },
  establishmentYear: Number,
  totalStudents: Number,
  totalTeachers: Number,
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  website: String
});

const userSchema = mongoose.Schema({
  principalName: {
    type: String,
    required: true
  },
  principalEmail: {
    type: String,
    required: true,
    unique: true
  },
  principalPhone: {
    type: String,
    required: true
  },
  adminEmail: {
    type: String,
    required: true
  },
  adminPhone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isEnrolled: {
    type: Boolean,
    default: false
  },
  schoolInfo: schoolInfoSchema
}, {
  timestamps: true
});

// Method to check password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
