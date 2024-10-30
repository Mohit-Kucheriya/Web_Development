document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameToDisplay = document.getElementById("city-name");
    const temperatureToDisplay = document.getElementById("temperature");
    const descriptionToDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "1d51eac063923cb65d9bca8466ecba32";

    getWeatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        /* 
        Always remember two things when you make any API call, to the server or dataBase:
        1. Server may throw an error and you need to handle it.
        2. Server or dataBase may take some time to send the response. It is not a immediate response.
        */

        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData)

        } catch (error) {
            displayErrorMessage()

        }

    });

    // This function is used to fetch the weather data from the server
    async function fetchWeatherData(city) {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        console.log(typeof response);
        console.log(response);

        // Check if the response is ok or not i.e gives the boolean value 
        if (!response.ok) {
            throw new Error("Error in fetching the weather data");
        }
        const data = await response.json();
        return data;
    }

    function displayWeatherData(data) {
        console.log(data);
        let { name, main, weather } = data;
        cityNameToDisplay.textContent = name
        temperatureToDisplay.textContent = `Temperature : ${main.temp}°C`;
        descriptionToDisplay.textContent = weather[0].description;
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");

    }

    // This function is called when there is an error in fetching the weather data i.e it will make sure that the weather info is hidden and the error message is displayed
    function displayErrorMessage() {
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }
});
