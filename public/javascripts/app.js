angular.module('restaurant', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.test = 'Hello world!';
    $scope.restaurants = [
		{title:'Cubby\'s',rating:306*4,votes:306},
		{title:'Hruska\'s Kolaches',rating:210*4.5,votes:210},
		{title:'Cupbop Korean BBQ',rating:362*4,votes:362},
		{title:'Cafe On Fire',rating:79*4.5,votes:79},
		{title:'Molly\'s',rating:58*4.5,votes:58},
		{title:'Taste',rating:53*4.5,votes:53},
		{title:'Communal',rating:281*4.5,votes:281},
		{title:'Black Sheep Cafe',rating:398*4,votes:398}
	];

    $scope.addRestaurant = function() {
       if($scope.formContent === '') { return; }
      console.log("In addRestaurant with "+$scope.formContent);
      $scope.create({
        title: $scope.formContent,
		rating: 0,
        votes: 0,
      });
      $scope.formContent = '';
    };

    $scope.incrementVotes = function(restaurant) {
      $scope.vote(restaurant);
    };
    
    $scope.getAll = function() {
      return $http.get('/restaurants').success(function(data){
//        console.log("pass getAll");
        angular.copy(data, $scope.restaurants);
      });
    };
    $scope.getAll();

    $scope.create = function(resturant) {
      //console.log("pass");
      return $http.post('/comments', restaurant).success(function(data){
        //console.log(data);
        $scope.restaurants.push(data);
      });
    };

    $scope.vote = function(restaurant) {
      return $http.put('/restaurants/' + comment._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          restaurants.votes += 1;
        });
    };

  }
]);

