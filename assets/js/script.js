var cityWeather = function(city){
    var apiKey = "2d59efa3d16a72230e485934a5a7bc3c"
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
// fetch
    fetch(apiUrl)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data, city);
        });
    });
};
//display weather section
var displayWeather = function (weather, searchCity){
    
}
