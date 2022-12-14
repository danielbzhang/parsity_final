const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  sex: { type: String },
  phone: { type: String },
  email: { type: String },
  // createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Player', PlayerSchema);
