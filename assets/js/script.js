var searchBtnEl = document.querySelector("#search-button");

var cityWeather = function(city) {
    var apiKey = "2d59efa3d16a72230e485934a5a7bc3c"
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`

    fetch(apiUrl)
    .then(function(response){
        response.json().then(function(data){

        })
    })
};































searchBtnEl.addEventListener("click", formSubmitHandler )