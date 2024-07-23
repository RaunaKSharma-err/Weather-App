const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" 
const apikey = "fe6e07db4684cf7763e1206bb6ce865d"
const inp = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-icon");
const temprature = document.querySelector(".temp");
const cityName = document.querySelector(".cityNamee");
const humidityDegree = document.querySelector(".hum-degree");
const windSpeed = document.querySelector(".wind-speed");
const img = document.querySelector(".weather"); 
const invalidCity = document.querySelector(".invalid");



async function weatherCheck(city){
    const response = await fetch(api + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data)
    
    if(data.cod === "404"){
        invalidCity.innerText = "City not found:("
    }else{invalidCity.innerText = ""};
    temprature.innerText = data.main.temp + "°c";
    cityName.innerText = data.name;
    humidityDegree.innerText = data.main.humidity + "%";
    windSpeed.innerText = data.wind.speed + "Km/h";

    if(data.weather[0].main === "Clear"){
        img.src = "./images/clear.png";
    }else if(data.weather[0].main === "Clouds"){
        img.src = "./images/clouds.png";
    }else if(data.weather[0].main === "Drizzle"){
        img.src = "./images/drizzle.png";
    }else if(data.weather[0].main === "Mist"){
        img.src = "./images/mist.png";
    }else if(data.weather[0].main === "Rain"){
        img.src = "./images/rain.png";
    }else if(data.weather[0].main === "Snow"){
        img.src = "./images/snow.png";
    }
}

searchBtn.addEventListener("click",()=>{
    weatherCheck(inp.value);
})
