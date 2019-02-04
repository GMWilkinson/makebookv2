const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true},
  password: {type: String, required: true, select: false},
  image: String
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function() {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 8);
  }
});

userSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('User', userSchema);
