// NAV BUTTON
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animate');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// WEATHER
const apiKey = '884d02f5eb1903be4f0c638b89335b31';
const city = 'Biliran';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
	.then(response => response.json())
	.then (data => {
		const weatherInfo = document.getElementById('weather-info');
		const weatherIcons = {
			'Clear': 'images/clear.svg',
			'Clouds': 'images/clouds.svg',
			'Rain': 'images/rain.svg',
			'Drizzle': 'images/drizzle.svg',
			'Thunderstorm': 'images/thunderstorm.svg'
		};
		const iconUrl = weatherIcons[data.weather[0].main] || 'images/uknown.svg';

		const weatherDesc = data.weather[0].description;
		const words = weatherDesc.split(' ');
		const capitalizedWords = words.map(word => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});

		const capitalDesc = capitalizedWords.join(' '); 

		weatherInfo.innerHTML = `
		<img src="${iconUrl}" alt="${data.weather[0].description}" width="80">

		<p>Temperature: <strong>${data.main.temp}°C </strong> <br>
		Description: <strong>${capitalDesc}</strong> <br>
		Humidity: <strong>${data.main.humidity}% </strong></p>
		`;
})
.catch(error => {
    console.error('Error fetching weather data:', error);
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = 'Error fetching weather data.';
});


fetch(forecastUrl)
.then(response => response.json())
.then(data => {
  const forecastInfo = document.getElementById('forecast-info');
  const forecastData = data.list.filter(item => {
    const date = new Date(item.dt_txt);
    return date.getHours() === 12;
  }).slice(0, 3);
  forecastData.forEach(forecast => {
    const date = new Date(forecast.dt_txt);
    const dayofWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    const temperature = forecast.main.temp;
    forecastInfo.innerHTML += `<p>${dayofWeek}: <strong>${temperature}°C </strong></p>`;
  });
})
.catch(error => {
  console.error('Error fetching weather data:', error);
  const forecastInfo = document.getElementById('forecast-info-2');
  forecastInfo.innerHTML = 'Error fetching weather data.';
});


// FOOTER
const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[2].textContent = `©${currentYear} Biliran Chamber of Commerce`;
footerParagraphs[3].textContent = `Last modified: ${lastModifiedDate}`;
