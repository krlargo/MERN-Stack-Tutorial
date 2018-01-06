const mongoose = require('mongoose');
const { Scehma } = mongoose;

const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema);
