/* This Show Local Weather App will discover the website user"s location, then queries the openweathermap.org API for current weather at that location, and then displays the results. */
// get DOM references. 
var displayCity = document.getElementById("city");                  
var displayCountry = document.getElementById("country");
var displayTemperature = document.getElementById("temperature");
var displayDegreeSymbol = document.getElementById("degreeSymbol");
var displayHumidity = document.getElementById("humidity");
var displayConditions = document.getElementById("conditions");
var displayWinds = document.getElementById("winds");
var displayPressure = document.getElementById("pressure");
var displaySunrise = document.getElementById("sunrise");
var displaySunset = document.getElementById("sunset");
var button = document.getElementById("unit");
var backgroundPicture = "assets/cloudy.jpg"; // set default background picture.
var cityName = "";
var regionName = "";
var countryName = "";
var locString = "";
var latitude = "";
var longitude = "";
var countryUnits = "imperial";   // set default measurement system to imperial.
var temperature = "";
var windSpeed = "";
var windDirection = "";
var humidity = "";
var pressure = "";
var pressureSymbol = "mb";    // set default pressure units.
var sunrise = "";
var sunset = "";
var currentWeather = "";
var tempSymbol = "F";          // set default temperature units.
var windSymbol = "mph";       // set default wind speed units.
var iconURL = "";
    
function getLocation(){
    $.get("https://ipinfo.io", function(response) {
        cityName = response.city;
        regionName = response.region;
        countryName = response.country;
        locString = response.loc.split(",");
        latitude = Number(locString[0]);
        longitude = Number(locString[1]);
        
        displayCity.innerHTML = cityName + ",";
        displayCountry.innerHTML = regionName + "  " + countryName;
    }, "jsonp")
    cityName = displayCity.innerHTML.slice(-1);
    getWeather(cityName);
}

    
function getWeather(cityName){
    
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + "Lexington" + "&APPID=aa513b9fa0b09eb8f6106ba8d3a4f054", function(response) {
        temperature = main.temp;
        regionName = response.region;
        countryName = response.country;
        displayCity.innerHTML = cityName + ",";
        displayCountry.innerHTML = regionName + "  " + countryName;
    }, "jsonp")
}
getLocation();