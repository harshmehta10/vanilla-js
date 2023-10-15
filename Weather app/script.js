const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dehli";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "230a5a99acmsh09cb740609a8291p1a07e8jsn8c578d221392",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

fetch(url, options)
  .then((res) => res.json())
  .then((data) => {
    console.log("[data]", data);
  })
  .catch((e) => console.log("[err]", e));
