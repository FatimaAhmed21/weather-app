let checkBtn = document.querySelector(".search button");
let cityInp = document.querySelector(".search input");
let weatherIcon = document.querySelector(".weather-icon");
let cityName = document.querySelector("#city");
let temp = document.querySelector("#temp");
let windSpeed = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");

async function checkWeather(city) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b234750a26b489255abba60e7d1db452&units=metric`
  );
  let responseData = await response.json();
  console.log(responseData);

  if (responseData.name == undefined) {
    document.querySelector(".error-message").style.display = "block";
  } else {
    document.querySelector(".error-message").style.display = "none";
    cityName.innerHTML = responseData.name;
    temp.innerHTML = responseData.main.temp + "°c";
    windSpeed.innerHTML = responseData.wind.speed + " Km/h";
    humidity.innerHTML = responseData.main.humidity + "%";
    if (responseData.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (responseData.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (responseData.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (responseData.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (responseData.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (responseData.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
  }
}

checkWeather("berlin");
