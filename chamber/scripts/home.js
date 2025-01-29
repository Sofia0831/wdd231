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


// SPOTLIGHT
const businessUrl = 'data/members.json';
const cards = document.querySelector('#spotlight');

async function getBusinessData() {
	try {
	  const response = await fetch(businessUrl);
	  if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	  }
  
	  const data = await response.json();
	  const filteredBusinesses = data.members.filter(business => business.level === "2" || business.level === "3"); 
  
	  const randomBusinesses = [];
	  while (randomBusinesses.length < 3) {
		const randomIndex = Math.floor(Math.random() * filteredBusinesses.length);
		const randomBusiness = filteredBusinesses[randomIndex];
		if (!randomBusinesses.includes(randomBusiness)) {
		  randomBusinesses.push(randomBusiness); 
		}
	  }
  
	  return randomBusinesses;
	} catch (error) {
	  console.error("Error fetching business data:", error);
	}
  }
  

getBusinessData().then(displayBusiness);

function displayBusiness(businesses) {
	document.querySelector("#spotlight").innerHTML = '';
	businesses.forEach((business) => {
		let card = document.createElement('section');
		card.className = 's-cards';

		let businessName = document.createElement('h2');
		businessName.className = 'sbusiness-name';
		businessName.innerHTML = `${business.name}`;

		let logoContainer = document.createElement('div');
		logoContainer.className = 'slogo-container';

		let portrait = document.createElement('img');
        portrait.className = 'spic';
		portrait.setAttribute('src', business.image);
		portrait.setAttribute('alt', '${business.name} logo');
		portrait.setAttribute('loading', 'lazy');
		portrait.setAttribute('width', '70');
		portrait.setAttribute('height', '70');

		let container = document.createElement('div');
		container.className = 'sp-container';

		let address = document.createElement('p');
		address.className = 'saddress';
		address.innerHTML = `${business.address}`;

		let number = document.createElement('p');
		number.className = 'snumber';
		number.innerHTML = `${business.number}`;

		let site = document.createElement('a');
		site.className ='ssite';
		site.href =`${business.site}`;
		site.innerHTML = `${business.name}`;

		let level = document.createElement('p');
		level.className = 'slevel';
		level.innerHTML = `<span>Level:</span> ${business.level}`;

		let box = document.createElement('div');
		box.className = 'sinfo-container';


		card.appendChild(businessName);
		card.appendChild(box);
		box.appendChild(logoContainer);
		box.appendChild(container);
		logoContainer.appendChild(portrait);
		container.appendChild(address);
		container.appendChild(number);
		container.appendChild(site);
		businessName.appendChild(level);

		cards.appendChild(card);
	});
}


// FOOTER
const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[2].textContent = `©${currentYear} Biliran Chamber of Commerce`;
footerParagraphs[3].textContent = `Last modified: ${lastModifiedDate}`;