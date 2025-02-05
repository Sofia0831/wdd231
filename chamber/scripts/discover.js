import { places } from "../data/places.mjs";
// console.log(places)


// NAV BUTTON
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animate');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// welcome
const visitorInfo = document.querySelector("#here");
const lastVisit = localStorage.getItem("lastVisit");
const currentDate = new Date();

if (lastVisit === null) {
	visitorInfo.textContent = "Welcome! Let us know if you have any questions.";
} else {
	const lastVisitDate = new Date(lastVisit);
	const timeDiff = currentDate.getTime() - lastVisitDate.getTime();
	const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

	if (daysDiff < 1) {
		visitorInfo.textContent = "Back so soon! Awesome!";
	} else if (daysDiff === 1) {
		visitorInfo.textContent = "You last visited 1 day ago.";
	} else {
		visitorInfo.textContent = `You last visited ${daysDiff} days ago.`;
	}
}

localStorage.setItem("lastVisit", currentDate.toString());

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