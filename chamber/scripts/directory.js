// NAV BUTTON
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animate');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
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
