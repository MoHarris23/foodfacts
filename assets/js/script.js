var searchedFruit = "banana";
var searchHistory = [];
var carbs = "";
var protein = "";
var fat = "";
var calories = ""
var sugar = ""

// Function to retrieve API data from FruityVice
function getFruityVice() {

    // Since FruityVice is not CORS enabled have to go through proxy URL
    var proxyURL = "https://cors-anywhere.herokuapp.com/"
    var fetchURL = "https://www.fruityvice.com/api/fruit/" + searchedFruit;
  
    fetch(proxyURL + fetchURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
        carbs = response.nutritions.carbohydrates;
        protein = response.nutritions.protein;
        fat = response.nutritions.fat;
        calories = response.nutritions.calories;
        sugar = response.nutritions.sugar;
        })
      
  }



  