const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  role: { type: String, enum : ['user','admin'], default: 'user'},
  password: { type: String },
  apiKey: {type: String},
  token: { type: String },
  active: {type: Boolean, default: true}
});

module.exports = mongoose.model("user", userSchema);