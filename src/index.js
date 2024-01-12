const weatherDiv = document.querySelector("div");
const searchButton = document.getElementById("searchButton");


searchButton.addEventListener("click", () => {
    async function getWeather() {
        const searchResult = document.getElementById("searchbar").value;
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=6425748fc6174f0882a173729241001&q=${searchResult}`,
          { mode: "cors" },
        );
        const weatherData = await response.json();
        weatherDiv.innerHTML = `the current temperature in ${searchResult} 
        is ${weatherData.current.temp_f}° and it feels like 
        ${weatherData.current.feelslike_f}° Condition: ${weatherData.current.condition.text}`;
        console.log(weatherData);
      }
      getWeather();

})


export default getWeather