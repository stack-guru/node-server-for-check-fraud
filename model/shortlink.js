const mongoose = require("mongoose");

const shortlinkSchema = new mongoose.Schema({
    url: { type: String },
    shortLink: { type: String }
}, {timestamps: true});

module.exports = mongoose.model("shortlink", shortlinkSchema);