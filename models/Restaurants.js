var mongoose = require('mongoose');
var RestaurantSchema = new mongoose.Schema({
  title: String,
  star1: {type: Number, default: 0},
  star2: {type: Number, default: 0},
  star3: {type: Number, default: 0},
  star4: {type: Number, default: 0},
  star5: {type: Number, default: 0},
  rating: {type: Number, default: 0},
  votes: {type: Number, default: 0},
});

RestaurantSchema.methods.upstar1 = function(cb) {
  this.star1 += 1;
  this.votes += 1;
  this.save(cb);
}

RestaurantSchema.methods.upstar2 = function(cb) {
  this.star2 += 1;
  this.votes += 1;
  this.save(cb);
}

RestaurantSchema.methods.upstar3 = function(cb) {
  this.star3 += 1;
  this.votes += 1;
  this.save(cb);
}

RestaurantSchema.methods.upstar4 = function(cb) {
  this.star4 += 1;
  this.votes += 1;
  this.save(cb);
}

RestaurantSchema.methods.upstar5 = function(cb) {
  this.star5 += 1;
  this.votes += 1;
  this.save(cb);
}

RestaurantSchema.methods.ratingCalc = function(cb) {
	var one = this.star1 * 1;
	var two = this.star2 * 2;
	var three = this.star3 * 3;
	var four = this.star4 * 4;
	var five = this.star5 * 5;

	var total = one + two + three + four + five;
	var avg = total / this.votes;

	this.rating = avg.toFixed(2);
	this.save(cb);
}

mongoose.model('Restaurant', RestaurantSchema);
