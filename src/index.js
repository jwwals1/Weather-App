const weatherDiv = document.getElementById("weatherReport");
const searchButton = document.getElementById("searchButton");
const weatherGif = document.createElement('img')
weatherGif.setAttribute('id', 'weatherGif')



async function getWeather() {
  try {
    const searchResult = document.getElementById("searchbar").value;
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=6425748fc6174f0882a173729241001&q=${searchResult}`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    // const currentWeatherData = {

    // }
    const weatherCondition = weatherData.current.condition.text
    console.log(weatherData);
    console.log(weatherCondition)
    getGif(weatherCondition)
    getWeatherDiv(weatherData)
  } catch (error) {
    alert('Please enter a valid location')
  }
}

async function getGif(weatherCondition) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=3ylC2Oj6VF2ARRAKOjZ72lP7WpVBBU0l&s=${weatherCondition}`,
      { mode: "cors" },
    );
    const gifData = await response.json();
    weatherGif.src = gifData.data.images.original.url;
    weatherDiv.appendChild(weatherGif)
    console.log('test')
  } catch(error) {
    alert('Please enter a valid location')
  }

}


function getWeatherDiv(weatherData) {
  const weatherDiv = document.getElementById("weatherReport");
  const searchResult = document.getElementById("searchbar").value;
  const currentTemp = weatherData.current.temp_f
  const currentFeelLikeTemp = weatherData.current.feelslike_f
  weatherDiv.innerHTML = `<div>Current weather in ${searchResult}</div>
  <div>Current Temperature: ${currentTemp}° </div>
  <div>Feels like 
  ${currentFeelLikeTemp}° </div>
  <div>Condition: ${weatherData.current.condition.text}</div>`;
}

document.addEventListener('DOMContentLoaded', function() {
  let checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function(currentTemp) {
    if (checkbox.checked) {
      currentTemp = ((currentTemp - 32) * (5/9))
      console.log(currentTemp)
    } else {
      console.log('Not checked')
      currentTemp = currentTemp
    }
  });
});

searchButton.addEventListener("click", () => {
  getWeather();
});

