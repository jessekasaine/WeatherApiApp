const apiKey = "3e7738872a64820a92ce3e0df1491342"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input"); 
const searchBtn = document.querySelector(".search button"); 
const weathericon = document.getElementById("weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.getElementById("error").style.display = "block";
        document.getElementById("weather").style.display = "none";
    }
    else {
        
        
        var data = await response.json();

        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
        
    if (data.weather[0].main == "Clouds") {
        weathericon.src = "/Assets/images/clouds.png"        
    } else if(data.weather[0].main == "Clear"){
        weathericon.src = "/Assets/images/clear.png"        
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "/Assets/images/rain.png"        
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "/Assets/images/drizzle.png"        
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "/Assets/images/mist.png"        
    }
        document.getElementById("weather").style.display = "block";
        document.getElementById("error").style.display = "none";
}
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
