var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/restaurants', function(req, res, next) {
  Restaurant.find(function(err, restaurants){
    if(err){ return next(err); }
    res.json(restaurants);
  });
});

router.post('/restaurants', function(req, res, next) {
  var restaurant = new Restaurant(req.body);
  restaurant.save(function(err, restaurant){
    if(err){ return next(err); }
    res.json(restaurant);
  });
});

router.param('restaurant', function(req, res, next, id) {
  var query = Restaurant.findById(id);
  query.exec(function (err, restaurant){
    if (err) { return next(err); }
    if (!restaurant) { return next(new Error("can't find restaurant")); }
    req.restaurant = restaurant;
    return next();
  });
});

router.get('/restaurants/:restaurant', function(req, res) {
  res.json(req.restaurant);
});

router.put('/restaurants/:restaurant/rating', function(req, res, next) {
  req.comment.upvote(function(err, restaurant){
    if (err) { return next(err); }
    res.json(restaurant);
  });
});

module.exports = router;

