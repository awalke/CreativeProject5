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

router.put('/restaurants/:restaurant/vote', function(req, res, next) {
  req.restaurant.vote(function(err, restaurant){
    if (err) { return next(err); }
    res.json(restaurant);
  });
});

router.put('/restaurants/:restaurant/star1', function(req, res, next) {
  req.restaurant.upstar1(function(err, restaurant){
    if (err) { return next(err); }
    res.json(restaurant);
  });
});

router.put('/restaurants/:restaurant/star2', function(req, res, next) {
  req.restaurant.upstar2(function(err, restaurant){
    if (err) { return next(err); }
    res.json(restaurant);
  });
});

router.put('/restaurants/:restaurant/star3', function(req, res, next) {
  req.restaurant.upstar3(function(err, restaurant){
    if (err) { return next(err); }
    res.json(restaurant);
  });
});

router.put('/restaurants/:restaurant/star4', function(req, res, next) {
  req.restaurant.upstar4(function(err, restaurant){
    if (err) { return next(err); }
    res.json(restaurant);
  });
});

router.put('/restaurants/:restaurant/star5', function(req, res, next) {
  req.restaurant.upstar5(function(err, restaurant){
    if (err) { return next(err); }
    res.json(restaurant);
  });
});

router.put('/restaurants/:restaurant/ratingCalc', function(req, res, next) {
  req.restaurant.ratingCalc(function(err, restaurant) {
    if (err) { return next(err); }
    res.json(restaurant);
  });
});

router.delete('/restaurants/:restaurant', function(req, res) {
  console.log("in Delete");
  req.restaurant.remove();
  res.json(req.restaurant);
});

module.exports = router;
