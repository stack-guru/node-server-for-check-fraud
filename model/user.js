const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  role: { type: String, enum : ['user','admin'], default: 'user'},
  password: { type: String },
  apiKey: {type: String},
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);