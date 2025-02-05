import { places } from "../data/places.mjs";
console.log(places)


// NAV BUTTON
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animate');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// PLACES
const placeDiv = document.querySelector("#allplaces")

function displayItems(places) {
	places.forEach(x => {
		const card = document.createElement('div');

		const fig = document.createElement('figure');
		const pic = document.createElement('img');
		pic.src = `${x.photoUrl}`;
		pic.alt = x.name;
		fig.appendChild(pic);
		card.appendChild(fig);

		const title = document.createElement('h2');
		title.innerText = x.name;
		card.appendChild(title);

		const address = document.createElement('address');
		address.innerText = x.address;
		card.appendChild(address);

		const desc = document.createElement('p');
		desc.innerText = x.description;
		card.appendChild(desc);

		const more = document.createElement('button');
		more.innerText = `Learn More`;
		card.appendChild(more);

		placeDiv.appendChild(card);
	});
}

displayItems(places)


// FOOTER
const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[2].textContent = `©${currentYear} Biliran Chamber of Commerce`;
footerParagraphs[3].textContent = `Last modified: ${lastModifiedDate}`;