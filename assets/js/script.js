// Variables for different HTML elements
var $inputCity = document.getElementById("searchCity"); // Needs id for text area element


// To get data for best selling books from NYTimes API 
var getBookData = function(citySearch) {
    var apiUrl = "https://api.nytimes.com/svc/books/v3/lists.json?list-name=" + citySearch + "&api-key=2njTMELLnHST5J4DsJ9Jc7ZeVO6TXVMc";

    // Make fetch request to url for weather data
    fetch(apiUrl).then(function(response) {
        // Request was sucessful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
                getImageData(data)
            });
        } else {
            console.log("error") // Will need to connect to a modal
        };
    });
};
//getBookData("Hardcover Fiction");

// To get images for best selling books from google books
var getImageData = function(bookData) {
    var bookId = bookData.results[0].isbns[0].isbn10;
    var apiUrl = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + bookId + "&key=AIzaSyBMxlyBiHn8m2_O63HOvZN-yqn-bAsJmFc";
    
    fetch(apiUrl).then(function(response) {
        // Request sucessful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            });
        } else {
            console.log("error") // Will need to connect to a modal
        };
    });
};

