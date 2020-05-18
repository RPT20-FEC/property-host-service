const mongoose = require('mongoose');
require('dotenv').config();
const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

module.exports = db;
