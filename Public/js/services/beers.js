app.service('beerService', ['$http', function ($http){
/*
   var allBeers = [{name: "Goldstar", style: "lager", abv: "4%", img:"http://cdn.timesofisrael.com/uploads/2015/04/Gold.jpg"},
   {name: "Maccabi", style: "lager", abv: "5%", img:"https://upload.wikimedia.org/wikipedia/commons/1/1d/Makabi_beer.jpg"},
   {name: "Daura GF", style: "lager", abv: "5%", img:"http://1.bp.blogspot.com/_BihBQIG3Ccg/TKuVCwTMjuI/AAAAAAAADWs/6h1JjCmngSE/s1600/20101005_2078.jpg"}]
*/

var beerData = {
    allBeers: []
  };

beerData.getAll = function () {
  return $http.get('/beers').success(function (data) {
    // this copies the response posts from route /beers to the client side
    // 'beers' under 'beerService'
    angular.copy(data, beerData.allBeers); //this is attay under beerData.allBeers
  });
};


  var addBeer = function(newBeer) {
      beerData.allBeers.push(newBeer)
  }
  var removeBeer = function(index) {
    beerData.allBeers.splice([index], 1)
  }

/*  var rateBeer = function(newRating, index){
    allBeers[index].rating = newRating
  }*/


return {beerData: beerData, addBeer: addBeer, removeBeer: removeBeer/*, rateBeer: rateBeer*/} 
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
  