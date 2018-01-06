const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema); // Two arguments means 'save into mongoose'
