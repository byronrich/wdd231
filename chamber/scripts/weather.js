const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const city = 'Layton,US';

async function getWeather() {
  try {
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);
    const weatherData = await weatherRes.json();

    document.getElementById('current-temp').textContent = `Temperature: ${Math.round(weatherData.main.temp)}°F`;
    document.getElementById('weather-desc').textContent = `Conditions: ${weatherData.weather[0].description}`;

    const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`);
    const forecastData = await forecastRes.json();

    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = '<h3>3-Day Forecast</h3>';

    const daily = forecastData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
    daily.forEach(day => {
      const date = new Date(day.dt_txt).toLocaleDateString();
      forecastDiv.innerHTML += `<p>${date}: ${Math.round(day.main.temp)}°F - ${day.weather[0].description}</p>`;
    });
  } catch (error) {
    console.error("Weather API error:", error);
  }
}

getWeather();
