const apiKey = "f34f317e021e5af58666ff9856393561"; // Replace with your actual API key

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const city = document.getElementById('city');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const icon = document.getElementById('icon');

searchBtn.addEventListener('click', () => {
    const cityName = cityInput.value;

    fetch(https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric)
        .then(response => response.json())
        .then(data => {
            city.textContent = Weather in ${data.name};
            temperature.textContent = ${data.main.temp}°C;
            description.textContent = data.weather[0].description;

            const iconUrl = http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png;
            icon.innerHTML = <img src="${iconUrl}" alt="Weather Icon">;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            city.textContent = 'Error fetching weather data';
        });
});