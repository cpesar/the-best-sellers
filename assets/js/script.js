// Variables for different HTML elements
var $inputCountry = document.getElementById(""); // Needs id for text area element
var $currentTemp = document.getElementById(""); // Needs id for p element

// To get RoadGoat travel data
var getTravelData = function(searchInput) {
    var apiUrl = "https://Authorization: Basic access_key=f3f2954f0d07b3a20454de0bb4b93a2c:secret_key=69d8e4dab3ce3916431469b256014a9e@api.roadgoat.com/api/v2/destinations/auto_complete?q=" + 
    searchInput; //+ //"&access_key=f3f2954f0d07b3a20454de0bb4b93a2c:secret_key=69d8e4dab3ce3916431469b256014a9e";
    
    //Make fetch request to url for travel data
    fetch(apiUrl).then(function(data) {
        //Request is successful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
            })
        } else {
            console.log("error")
        };
    });
};
//getTravelData("Utah");

// To get weather data 
var getWeatherData = function(lat, lon) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=&units=imperial&appid=6855f141fbc2348ef120b63c317a3472";

    // Make fetch request to url for weather data
    fetch(apiUrl).then(function(data) {
        // Request was sucessful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
            });
        } else {
            console.log("error")
        };
    });
};
