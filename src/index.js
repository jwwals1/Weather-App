const weatherDiv = document.getElementById("weatherReport");
const searchButton = document.getElementById("searchButton");
const weatherGif = document.getElementById("weatherGif");


async function getWeather() {
  try {
    const searchResult = document.getElementById("searchbar").value;
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=6425748fc6174f0882a173729241001&q=${searchResult}`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    const weatherCondition = weatherData.current.condition.text
    console.log(weatherData);
    console.log(weatherCondition)
    getGif(weatherCondition)
    getWeahterDiv(weatherData)
  } catch (error) {
    alert(error, "please enter a valid")
  }
}


function getWeahterDiv(weatherData) {
  const weatherDiv = document.getElementById("weatherReport");
  const searchResult = document.getElementById("searchbar").value;
  weatherDiv.innerHTML = `<div>Current weather in ${searchResult}</div>
  <div>Current Temperature: ${weatherData.current.temp_f}° </div>
  <div>Feels like 
  ${weatherData.current.feelslike_f}° </div>
  Condition: ${weatherData.current.condition.text}`;
}

async function getGif(weatherCondition) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=3ylC2Oj6VF2ARRAKOjZ72lP7WpVBBU0l&s=${weatherCondition}`,
    { mode: "cors" },
  );
  const gifData = await response.json();
  weatherGif.src = gifData.data.images.original.url;
  console.log('test')
}

searchButton.addEventListener("click", () => {
  getWeather();
  getGif();
  // getWeahterDiv()
})


;

