const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Model
const UserSchema = new Schema({
  id: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;
