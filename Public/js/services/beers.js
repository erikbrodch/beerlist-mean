app.service('beerService', ['$http', function ($http){


var beerData = {
    allBeers: []

  };
beerData.getAll = function () {
  return $http.get('/beers').success(function (data) {
    // this copies the response posts from route /beers to the client side
    // 'beers' under 'beerService'
    angular.copy(data, beerData.allBeers); //this is array under beerData.allBeers
  });
};


  beerData.addBeer = function(newBeer) {
    $http.post('/beers', newBeer).then(function(){
      beerData.getAll(); 
    }); 

      
  }
  beerData.removeBeer = function(beer) {
    $http.post('/beersremove', beer).then(function(){
      beerData.getAll(); 
    });
  }

/*  var rateBeer = function(newRating, index){
    allBeers[index].rating = newRating
  }*/


return beerData;/*, rateBeer: rateBeer*/
}]);
  
/*app.service('beerService', function(){

   var allBeers = [{name: "Goldstar", style: "lager", abv: "4%", img:"http://cdn.timesofisrael.com/uploads/2015/04/Gold.jpg"},
   {name: "Maccabi", style: "lager", abv: "5%", img:"https://upload.wikimedia.org/wikipedia/commons/1/1d/Makabi_beer.jpg"},
   {name: "Daura GF", style: "lager", abv: "5%", img:"http://1.bp.blogspot.com/_BihBQIG3Ccg/TKuVCwTMjuI/AAAAAAAADWs/6h1JjCmngSE/s1600/20101005_2078.jpg"}]


  var addBeer = function(newBeer) {
      allBeers.push(newBeer)
  }
  var removeBeer = function(index) {
    allBeers.splice([index], 1)
  }

/*  var rateBeer = function(newRating, index){
    allBeers[index].rating = newRating
  }*/


/*return {allBeers: allBeers, addBeer: addBeer, removeBeer: removeBeer} 
};*/
  