const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODBURL);

module.exports = mongoose.connection;
