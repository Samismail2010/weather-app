
var city = "";
var now = moment();
var currentDate = now.format("dddd[,] MMMM Do gggg");
var currentDay = now.format("DD");

$("#dateMain").text(currentDate);

$(".search").on("click", function(){
    city = $("cityMain").val();
    getWeather(city);
});



var getWeather = function(city) {
    var apiKey = "09e0d7e534e41ce68ba5f2577fa5f760";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial&appid=" + apiKey;
    fetch(apiUrl).then(function(response){
        response.json.then(function(data){ 
            $("#cityMain").text(response.main.temp);
            $("#degreeMain").text(response.main.temp);
            $("#humidityMain").text(response.main.humidity);
            $("#windMain").text(response.wind.speed);
            $("#iconMain").attr(".src","https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png")
        });

    });
}

