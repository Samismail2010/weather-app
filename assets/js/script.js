var currentWeatherEl = document.querySelector("#current-weather");




//fetch weather API
var cityWeather = function(city){
    var apiKey = "2d59efa3d16a72230e485934a5a7bc3c"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(apiURL).then(function(response){
        response.json().then(function(data){
            console.log()
        });
    });
};
//current weather
var currentWeather = function(weather, searchCity){
    currentWeatherEl.textContent = "";
}
var weatherIconEl = document.createElement("span");
var weatherIcon = document.createElement("img")
//weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);

var saveSearch = function() {
    localStorage.setItem("cities", JSON.stringify(cities));
};
