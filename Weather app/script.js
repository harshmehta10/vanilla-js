const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "230a5a99acmsh09cb740609a8291p1a07e8jsn8c578d221392",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(url + city, options)
    .then((res) => res.json())
    .then((data) => {
      console.log("[data]", data);
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      humidity2.innerHTML = data.humidity;
      max_temp.innerHTML = data.max_temp;
      min_temp.innerHTML = data.min_temp;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
      temp.innerHTML = data.temp;
      temp2.innerHTML = data.temp;
      wind_degrees.innerHTML = data.wind_degrees;
      wind_speed.innerHTML = data.wind_speed;
      wind_speed2.innerHTML = data.wind_speed;
    })
    .catch((e) => console.log("[err]", e));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
const getWeather3 = (shanghai) => {
  fetch(url + shanghai, options)
    .then((res) => res.json())
    .then((data) => {
      console.log("[data]", data);
      Feels_like3.innerHTML = data.feels_like;
      Humidity3.innerHTML = data.humidity;
      Max_temp3.innerHTML = data.max_temp;
      Min_temp3.innerHTML = data.min_temp;
      Sunrise3.innerHTML = data.sunrise;
      Sunset3.innerHTML = data.sunset;
      Temp3.innerHTML = data.temp;
      Wind_degrees3.innerHTML = data.wind_degrees;
      Wind_speed3.innerHTML = data.wind_speed;
    })
    .catch((e) => console.log("[err]", e));
};

const getWeather4 = (city) => {
  fetch(url + city, options)
    .then((res) => res.json())
    .then((data) => {
      console.log("[data]", data);
      Feels_like4.innerHTML = data.feels_like;
      Humidity4.innerHTML = data.humidity;
      Max_temp4.innerHTML = data.max_temp;
      Min_temp4.innerHTML = data.min_temp;
      Sunrise4.innerHTML = data.sunrise;
      Sunset4.innerHTML = data.sunset;
      Temp4.innerHTML = data.temp;
      Wind_degrees4.innerHTML = data.wind_degrees;
      Wind_speed4.innerHTML = data.wind_speed;
    })
    .catch((e) => console.log("[err]", e));
};

const getWeather5 = (city) => {
  fetch(url + city, options)
    .then((res) => res.json())
    .then((data) => {
      console.log("[data]", data);
      Feels_like5.innerHTML = data.feels_like;
      Humidity5.innerHTML = data.humidity;
      Max_temp5.innerHTML = data.max_temp;
      Min_temp5.innerHTML = data.min_temp;
      Sunrise5.innerHTML = data.sunrise;
      Sunset5.innerHTML = data.sunset;
      Temp5.innerHTML = data.temp;
      Wind_degrees5.innerHTML = data.wind_degrees;
      Wind_speed5.innerHTML = data.wind_speed;
    })
    .catch((e) => console.log("[err]", e));
};

const getWeather6 = (city) => {
  fetch(url + city, options)
    .then((res) => res.json())
    .then((data) => {
      console.log("[data]", data);
      Feels_like6.innerHTML = data.feels_like;
      Humidity6.innerHTML = data.humidity;
      Max_temp6.innerHTML = data.max_temp;
      Min_temp6.innerHTML = data.min_temp;
      Sunrise6.innerHTML = data.sunrise;
      Sunset6.innerHTML = data.sunset;
      Temp6.innerHTML = data.temp;
      Wind_degrees6.innerHTML = data.wind_degrees;
      Wind_speed6.innerHTML = data.wind_speed;
    })
    .catch((e) => console.log("[err]", e));
};

getWeather("Delhi");
getWeather3("shanghai");
getWeather4("boston");
getWeather5("Lucknow");
getWeather6("kolkata");
