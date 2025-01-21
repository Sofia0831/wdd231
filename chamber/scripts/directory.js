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
	let desc = data.weather[0].description;
	const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${desc} icon`);

	weatherTemp.innerHTML = `
	<p><strong>Temp:</strong> ${data.main.temp}&deg;C</p>
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

//GRID-LIST BUTTON
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

const display = document.querySelector("#business-cards");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

//CARDS
const businessUrl = 'data/members.json';
const cards = document.querySelector('#business-cards');

async function getBusinessData() {
	try {
		const response = await fetch(businessUrl);
		if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

		const data = await response.json();
		return data.members;
	}
	catch(error) {
		console.error("Error fetching business data:", error);
	}

}

getBusinessData().then(displayBusiness);

function displayBusiness(businesses) {
	document.querySelector("#business-cards").innerHTML = '';
	businesses.forEach((business) => {
		let card = document.createElement('section');
		card.className = 'b-cards';

		let businessName = document.createElement('h2');
		businessName.className = 'business-name';
		businessName.innerHTML = `${business.name}`;

		let logoContainer = document.createElement('div');
		logoContainer.className = 'logo-container';

		let portrait = document.createElement('img');
        portrait.className = 'pic';
		portrait.setAttribute('src', business.image);
		portrait.setAttribute('alt', '${business.name} logo');
		portrait.setAttribute('loading', 'lazy');
		portrait.setAttribute('width', '70');
		portrait.setAttribute('height', '70');

		let container = document.createElement('div');
		container.className = 'p-container';

		let address = document.createElement('p');
		address.className = 'address';
		address.innerHTML = `${business.address}`;

		let number = document.createElement('p');
		number.className = 'number';
		number.innerHTML = `${business.number}`;

		let site = document.createElement('p');
		site.className ='site';
		site.innerHTML = `${business.website}`;

		let level = document.createElement('p');
		level.className = 'level';
		level.innerHTML = `<span>Level:</span> ${business.level}`;

		let box = document.createElement('div');
		box.className = 'info-container';


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
