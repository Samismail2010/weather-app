
var apiKey = "2d59efa3d16a72230e485934a5a7bc3c";
var city = "";
var now = moment();
var currentDate = now.format("dddd[,] MMMM Do gggg");
var currentDay = now.format("DD");

function getWeather(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
    fetch(apiUrl).then(function(response){
        $("#cityMain").text(response.name+ ", " + response.sys.country);
            $("#degreeMain").text(response.main.temp);
            $("#humidityMain").text(response.main.humidity);
            $("#windMain").text(response.wind.speed);
            $("#iconMain").attr("src","https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
    });
};