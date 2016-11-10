angular.module('restaurant', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.restaurants = [];

    $scope.addRestaurant = function() {
       if($scope.formContent === '') { return; }
      console.log("In addRestaurant with "+$scope.formContent);
      $scope.create({
        title: $scope.formContent,
        star1: 0,
        star2: 0,
        star3: 0,
        star4: 0,
        star5: 0,
        votes: 0,
      });
      $scope.formContent = '';
    };

    $scope.getAll = function() {
    return $http.get('/restaurants').success(function(data){
      angular.copy(data, $scope.restaurants);
    });
  }; 

    $scope.incrementStar1 = function(restaurant) {
      return $http.put('/restaurants/' + restaurant._id + '/star1')
      .success( function (data) {
        restaurant.star1 += 1;
        restaurant.votes += 1;
        $scope.ratingCalc(restaurant);
      });
    };

    $scope.incrementStar2 = function(restaurant) {
      return $http.put('/restaurants/' + restaurant._id + '/star2')
      .success( function (data) {
          restaurant.star2 += 1;
          restaurant.votes += 1;
          $scope.ratingCalc(restaurant);
      });
    };

    $scope.incrementStar3 = function(restaurant) {
      return $http.put('/restaurants/' + restaurant._id + '/star3')
      .success( function (data) {
        restaurant.star3 += 1;
        restaurant.votes += 1;
        $scope.ratingCalc(restaurant);
      });
    };

    $scope.incrementStar4 = function(restaurant) {
      return $http.put('/restaurants/' + restaurant._id + '/star4')
      .success( function (data) {
          restaurant.star4 += 1;
          restaurant.votes += 1;
          $scope.ratingCalc(restaurant);
      });
    };

    $scope.incrementStar5 = function(restaurant) {
      return $http.put('/restaurants/' + restaurant._id + '/star5')
      .success( function (data) {
          restaurant.star5 += 1;
          restaurant.votes += 1;
          $scope.ratingCalc(restaurant);
      });
    };
  
    
    $scope.getAll = function() {
      return $http.get('/restaurants').success(function(data){
//        console.log("pass getAll");
        angular.copy(data, $scope.restaurants);
      });
    };
    $scope.getAll();

    $scope.create = function(restaurant) {
      //console.log("pass");
      return $http.post('/restaurants', restaurant).success(function(data){
        //console.log(data);
        $scope.restaurants.push(data);
      });
    };

    $scope.vote = function(restaurant) {
      return $http.put('/restaurants/' + restaurant._id + '/vote')
        .success(function(data){
          console.log("vote worked");
          restaurant.votes += 1;
        });
    };

    $scope.ratingCalc = function(restaurant) {
      return $http.put('/restaurants/' + restaurant._id + '/ratingCalc')
        .success(function(data){
           var total = (restaurant.star1 * 1) + (restaurant.star2 * 2) + (restaurant.star3 * 3) + (restaurant.star4 * 4) + (restaurant.star5 * 5);
           var avg = total / restaurant.votes;
           restaurant.rating = avg.toFixed(2);
        });
    };

    $scope.delete = function(restaurant) {
      $http.delete('/restaurants/' + restaurant._id )
        .success(function(data){
          console.log("delete worked");
        });
      $scope.getAll();
    };
  } 
]);


