const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
    name: { type: String},
    limit: {type: Number, default: 10},
    duration: {type: Number, default: 7},
    saleCount: {type: Number, default: 0}
});

module.exports = mongoose.model("package", packageSchema);