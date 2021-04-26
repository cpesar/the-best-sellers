// Variables for different HTML elements
var $inputCity = document.getElementById("searchCity"); // Needs id for text area element


// To get weather data and pass latitude and longitude
var getWeatherData = function(citySearch) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=6855f141fbc2348ef120b63c317a3472";

    // Make fetch request to url for weather data
    fetch(apiUrl).then(function(response) {
        // Request was sucessful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
                getRestaurantData(data)
            });
        } else {
            console.log("error") // Will need to connect to a modal
        };
    });
};

// To get data for restaurants
var getRestaurantData = function(citySearch) {
    //var lat = citySearch.coord.lat;
    //var lon = citySearch.coord.lon;
    //var $cuisineSearch = document.getElementById(""); // Needs id from cuisine input box
    //var $mileageSearch = document.getElementById(""); // Needs id from mileage input box
    
    // Checks if there is data in all 3 fields or just the require field
    //if (($cuisineSearch.value.trim()).length > 0) {
        //var apiUrl = "https://api.documenu.com/v2/restaurants/search/geo?lat=" + lat + 
        //"&lon=" + lon + "&distance=" + $mileageSearch.value.trim() + "&cuisine=" + 
        //$cuisineSearch.value.trim() + "?key=b0aa35c300aa1872f312da8fd74be792";
    //} else {
        //var apiUrl = "https://api.documenu.com/v2/restaurants/search/geo?lat=" + lat + 
        //"&lon=" + lon + "&distance=" + $mileageSearch.value.trim() + "?key=b0aa35c300aa1872f312da8fd74be792";
    //}; 

    //var apiUrl ="https://api.documenu.com/v2/restaurants/search/geo?lat=" + lat + 
    //"&lon=" + lon + "&distance=" + 5 + "&fullmenu?key=b0aa35c300aa1872f312da8fd74be792";

    // Search by zip code for restaurant data - need search box for zip code, cuisine, and mileage from zip code searched
    var apiUrl = "https://api.documenu.com/v2/restaurants/zip_code/" + $inputCity.value + "?key=b0aa35c300aa1872f312da8fd74be792";

    fetch(apiUrl).then(function(response) {
        // Request sucessful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            });
        };
    });
};

$(".btn").click(function() {
    event.preventDefault();
    getWeatherData($inputCity.value.trim());
});