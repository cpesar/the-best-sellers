
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
                addToBookCards(data.results);
            });
        } else {
            $("#modal-title").text("Error: " + response.statusText);
            $(".modal").modal();
            $("#modal1").modal('open');
        };
    });
};

//FOR LOOP FOR AMAZON URL 
async function addToBookCards(results) {
    for(var i = 0; i < 6; i++){
        var productUrl = results[i].amazon_product_url;
        console.log(productUrl);

    document.getElementById('book-buy-' + i).setAttribute('href', productUrl);

    
    var imageThumbnail = await getImageData(results[0].isbns[0].isbn10);
    console.log('image thumb: ',imageThumbnail);
    document.getElementById('book-img-' + i).innerHTML = imageThumbnail;
    

    var bookDetails = results[i].book_details[0].description
    document.getElementById('book-desc-' + i).innerHTML = bookDetails;


    //UPDATE CSS OVERFLOW FOR BOOK IMAGE
    var bookTitle = results[i].book_details[0].title
    document.getElementById('book-title-' +i).innerHTML = bookTitle;
    }

}


// getBookData("hardcover-fiction");
// To get images for best selling books from google books
async function getImageData(bookId) {
    
    var apiUrl = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + bookId + "&key=AIzaSyBMxlyBiHn8m2_O63HOvZN-yqn-bAsJmFc";

    await fetch(apiUrl).then(function (response) {
        // Request sucessful
        if (response.ok) {
            response.json().then(function (data) {
                // console.log('data.thumbnail: ',data.items[0].volumeInfo.imageLinks.thumbnail);
                if(!data.items) {
                    return 'https://via.placeholder.com/128x180';
                }
                return(data.items[0].volumeInfo.imageLinks.thumbnail);
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

