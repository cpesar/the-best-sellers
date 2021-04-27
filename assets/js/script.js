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
    console.log(results);
    
    fetch(apiUrl).then(function(response) {
        // Request sucessful
        if (response.ok) {
            response.json().then(function(data) {
                
            });
        } else {
            console.log("error") // Will need to connect to a modal
        };
    });
};



//FOR LOOP TO ITERATE THROUGH BOOK TITLES AND APPEND TO HTML
function addFiveDayData(data) {
  let fiveDayForecast = '';
  let fiveDayElement = document.getElementById('five-day-forecast');
  //loops through first 5 days in data.daily array returned from api
  //`` template strings allow you to write multi lines like below... ${...in here you can add javascript stuff}
  for (let i = 0; i < 5; i++) {
    fiveDayForecast += `
      <div class="day-forecast">
        <h3>${getFormattedDate(data.daily[i].dt, data.timezone_offset)}</h3>
        <img src="http://openweathermap.org/img/w/${
          data.daily[i].weather[0].icon
        }.png" alt="${data.daily[i].weather.main}"/>
        <p>Temp: ${tempConvert(data.daily[i].temp.day)}℉</p>
        <p>Humidity: ${data.daily[i].humidity}</p>
      </div>
    `;
  }
  fiveDayElement.innerHTML = fiveDayForecast;
}


// Variable for the book info: {details variable}.results[0].book_details
// Variable  for amazon link: {amazon variable}.results[0].amazon_product_url
