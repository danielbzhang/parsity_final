const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
  title: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  hostDate: { type: String },
  hostLocation: { type: String },
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
});

module.exports = mongoose.model('Tournament', TournamentSchema);
