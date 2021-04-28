
// To get data for best selling books from NYTimes API 
var getBookData = function() {
    var search = document.getElementById("genre-choice").value;
    
    var apiUrl = "https://api.nytimes.com/svc/books/v3/lists.json?list-name=" + search + "&api-key=2njTMELLnHST5J4DsJ9Jc7ZeVO6TXVMc";

    // Make fetch request to url for weather data
    fetch(apiUrl).then(function (response) {
        // Request was sucessful
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                getImageData(data)
                addToBookCards(data.results);
            });
        } else {
            $("#modal-title").text("Error: " + response.statusText);
            $(".modal").modal();
            $("#modal1").modal('open');
        };
    });
};

function addToBookCards(results) {
    for(var i = 0; i < 6; i++){
        var productUrl = results[i].amazon_product_url;
        console.log(productUrl);
    }
}


// getBookData("hardcover-fiction");

// To get images for best selling books from google books
var getImageData = function (bookData) {
    var bookId = bookData.results[0].isbns[0].isbn10;
    var apiUrl = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + bookId + "&key=AIzaSyBMxlyBiHn8m2_O63HOvZN-yqn-bAsJmFc";

    fetch(apiUrl).then(function (response) {
        // Request sucessful
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            });
        } else {
            $("#modal-title").text("Error: " + response.statusText);
            $(".modal").modal();
            $("#modal1").modal('open');
        };
    });
};

//selector initializer
$(document).ready(function(){
    $('select').formSelect();
  });

