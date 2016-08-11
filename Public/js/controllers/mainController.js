app.controller('beerCntrl', function($scope, beerService) {


/*connect controller to beerData object on services
and call getAll()*/
beerService.getAll().then(function () {
/*once we called getAll, and the array in the services recieved a response
we can put the data in the view with this line*/
    $scope.allBeers = beerService.allBeers;
  });





  $scope.addBeer = function() {
    var newBeer = {
      name: $scope.name,
      style: $scope.style,
      abv: $scope.abv,
      img: $scope.image
    }
    beerService.addBeer(newBeer)

  }

  $scope.removeBeer = function(beer) {
    beerService.removeBeer(beer)
  } 


});


/*app.controller('beerCntrl', function($scope, beerService) {

  //connect allmovies section to array
  $scope.allBeers = beerService.allBeers;




  $scope.addBeer = function() {
    var newBeer = {
      name: $scope.name,
      style: $scope.style,
      abv: $scope.abv,
      img: $scope.image
    }
    beerService.addBeer(newBeer)

  }

  $scope.removeBeer = function(index) {
    beerService.removeBeer (index)
  } 

/*  $scope.rateBeer = function(index) {
    var newRating = $scope.rating;
    beerService.rateBeer(newRating, index);
  }
*/
