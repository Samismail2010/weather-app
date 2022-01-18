var cities = [];

var currentWeatherEl = document.querySelector("#current-weather");
var userInputEl = document.querySelector("#user-input");
var currentWeatherEl = document.querySelector("#current-weather");
var searchedCityEl = document.querySelector("#name-date-img");
var searchBtnEl = document.querySelector("#search-button");
var forecastWeatherEl = document.querySelector("#forecast-weather");
var forecastTitleEl = document.querySelector("#forecast-title");
var previousSearchesEl = document.querySelector("#previous-searches");
var currentWeatherCont = document.querySelector("#current-weather-container");

var formSubmitHandler = function(event){
    event.preventDefault();
    var city = userInputEl.value.trim();

    if(city){
        cityWeather(city);
        fiveDayForecast(city);
        cities.unshift({city})
        userInputEl.value = "";
    }
    else {
        alert("Please enter a city.")
    }

    saveSearch();
    previousSearch(city);
}

//fetch weather API
var cityWeather = function(city){
    var apiKey = "2d59efa3d16a72230e485934a5a7bc3c"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(apiURL).then(function(response){
        response.json().then(function(data){
            currentWeather(data, city);
        });
    });
};
//current weather
var currentWeather = function(weather, searchCity){
    currentWeatherEl.textContent = "";
    $("#current-weather-container").removeClass();

var weatherIconEl = document.createElement("span");
var weatherIcon = document.createElement("img")
weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
weatherIconEl.appendChild(weatherIcon);

    searchedCityEl.textContent = searchCity + " (" + moment(weather.dt.value).format("MM/DD/YYYY") + ") ";  
    searchedCityEl.appendChild(weatherIconEl);
    //display temp
    var temperatureEl = document.createElement("div");
    temperatureEl.textContent = "Temp: " + weather.main.temp + " °F";
    currentWeatherEl.appendChild(temperatureEl);
    //display wind
    var windEl = document.createElement("div");
    windEl.textContent = "Wind: " + weather.wind.speed + " MPH";
    currentWeatherEl.appendChild(windEl);
    //display humidity
    var humidityEl = document.createElement("div");
    humidityEl.textContent = "Humidity: " + weather.main.humidity + " %";
    currentWeatherEl.appendChild(humidityEl);
};


var fiveDayForecast = function(city) {
    var apiKey = "c29dbdf00b06a84cdf3735b1122c2101"
    var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL).then(function(response){
        response.json().then(function(data){
                 
            displayForecast(data, city);
        });
    });
};
var displayForecast = function(weather){
    forecastWeatherEl.textContent = "";
    forecastTitleEl.textContent = "5 Day Forecast";

    var forecast = weather.list;
        for(var i=0; i < forecast.length; i+= 8){

            var forecastCard = document.createElement("div");
            forecastCard.setAttribute("id", "forecastCard");
            forecastCard.classList = "card bg-primary text-light d-flex";

            var dateObject = new Date(forecast[i].dt * 1000)
            var dateFormat = dateObject.toLocaleDateString("en-US");
            var date = document.createElement("h3");
            date.textContent= dateFormat
 
            var weatherIconEl = document.createElement("div");
            var weatherIcon = document.createElement("img");
            weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${forecast[i].weather[0].icon}.png`);
            weatherIconEl.appendChild(weatherIcon);
                         
            var temp = forecast[i].main.temp;
            var tempSpan = document.createElement("div");
            tempSpan.textContent = "Temp: " + temp;            

            var wind = forecast[i].wind.speed;
            var windSpan = document.createElement("div");
            windSpan.textContent = "Wind: " + wind + " MPH";  
            
            var hum = forecast[i].main.humidity;
            var humSpan = document.createElement("div");
            humSpan.textContent = "Humidity " + hum;

            forecastCard.appendChild(date);
            forecastCard.appendChild(weatherIconEl);
            forecastCard.appendChild(tempSpan);
            forecastCard.appendChild(windSpan);
            forecastCard.appendChild(humSpan);

            forecastWeatherEl.appendChild(forecastCard);

        }
}
var saveSearch = function() {
    localStorage.setItem("cities", JSON.stringify(cities));
};
var previousSearchHandler = function(event) {
    var city = event.target.getAttribute("data-city")
    if (city) {
        cityWeather(city);
        fiveDayForecast(city);
    }
}
searchBtnEl.addEventListener("click", formSubmitHandler);
previousSearchesEl.addEventListener("click", previousSearchHandler)