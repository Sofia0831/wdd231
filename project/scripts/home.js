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
	const roundedLow = Math.round(data.main.temp_min);
	const roundedHigh = Math.round(data.main.temp_max);
	const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${desc} icon`);

	weatherTemp.innerHTML = `
	<p><strong>${roundedTemp}&deg;C</strong> <br>
	${desc} <br>
	Low: <strong>${roundedLow}&deg;C</strong> <br>
	High: <strong>${roundedHigh}&deg;C</strong> <br>
	Humidity: <strong>${data.main.humidity}%</strong></p>
	`;
}