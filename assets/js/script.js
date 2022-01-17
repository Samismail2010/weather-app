
//fetch weather API
var cityWeather = function(city){
    var apiKey = "c29dbdf00b06a84cdf3735b1122c2101"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL).then(function(response){
        response.json().then(function(data){
            console.log()
        });
    });
};