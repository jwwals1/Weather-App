const weatherDiv = document.querySelector("div");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    async function getWeather() {
      try {
        const searchResult = document.getElementById("searchbar").value;
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=6425748fc6174f0882a173729241001&q=${searchResult}`,
          { mode: "cors" },
        );
        const weatherData = await response.json();
        console.log(weatherData);
        weatherDiv.innerHTML = `<div>Current weather in ${searchResult}</div>
        <div>Current Temperature: ${weatherData.current.temp_f}° </div>
        <div>Feels like 
        ${weatherData.current.feelslike_f}° </div>
        Condition: ${weatherData.current.condition.text}`;
      } catch (error) {
        alert(error)
      }
    }
    getWeather();
})


