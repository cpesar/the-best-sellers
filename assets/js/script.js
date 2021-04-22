// Variables for different HTML elements
var $inputCountry = document.getElementById(""); // Needs id for text area element
var $currentTemp = document.getElementById(""); // Needs id for p element

// To get weather data 
var getWeatherData = function(lat, lon) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=&units=imperial&appid=6855f141fbc2348ef120b63c317a3472";

    // Make fetch request to url for weather data
    fetch(apiUrl).then(function(data) {
        // Request was sucessful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
            })
        }
    })
}