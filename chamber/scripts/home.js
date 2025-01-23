// NAV BUTTON
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animate');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// WEATHER
const weatherTemp = document.querySelector('#weather-info');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('figcaption');

const apiKey = '884d02f5eb1903be4f0c638b89335b31';
const lat = "11.56";
const long = "124.40";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

async function apiFetch() {
	try {
	  const response = await fetch(apiUrl);
	  if (response.ok) {
	    const data = await response.json();
	    displayResults(data); 	
	  } else {
	      throw Error(await response.text());
	  }
	} catch (error) {
	    console.log(error);
	}
}
  
apiFetch();

function displayResults(data) {
	let desc = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	const roundedTemp = Math.round(data.main.temp);
	const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${desc} icon`);

	weatherTemp.innerHTML = `
	<p><strong>Temp:</strong> ${roundedTemp}&deg;C</p>
	<p><strong>Description:</strong> ${desc}</p>
	<p><strong>Humidity:</strong> ${data.main.humidity}%</p>
	`;
}


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




const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[2].textContent = `©${currentYear} Biliran Chamber of Commerce`;
footerParagraphs[3].textContent = `Last modified: ${lastModifiedDate}`;