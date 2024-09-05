document.getElementById("city-input-btn").addEventListener("click", function() {
    const city = document.getElementById("city-input").value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weather-info").style.display = "block";
                document.getElementById("city-name").textContent = data.name;
                document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById("wind-speed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
                document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
            } else {
                alert("City not found. Please enter a valid city name.");
            }
        })
        .catch(error => console.error("Error fetching the weather data:", error));
}
