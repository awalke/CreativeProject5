var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  title: String,
  rating: {type: Number, default: 0},
  votes: {type: Number, default: 0},
});
mongoose.model('Restaurant', CommentSchema);
