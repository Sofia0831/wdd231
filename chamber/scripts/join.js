// HEADER
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animate');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const memberships = [
	{
		level: 'NP Membership',
		sub: 'For nonprofit organizations dedicated to making a positive impact in Biliran',
		desc1: 'Free membership',
		desc2: 'Access to Chamber networking events',
		desc3: 'Invitations to community-driven initiatives'
	},
	{
		level: 'Bronze Membership',
		sub: 'Ideal for small businesses and startups looking to grow and connect with the local business community',
		desc1: 'Business directory listing',
		desc2: 'Member-exclusive discounts on events and services',
		desc3: 'Complimentary participation in one Chamber event per year'
	},
	{
		level: 'Silver Membership',
		sub: 'Provides enhanced exposure and valuable resources for growing businesses',
		desc1: 'All Bronze Member benefits',
		desc2: 'Priority access to Chamber events',
		desc3: 'Opportunities to sponsor Chamber events'
	},
	{
		level: 'Gold Membership',
		sub: 'For established businesses seeking maximum visibility and influence within the Chamber and the community',
		desc1: 'All Silver Member benefits',
		desc2: 'Complimentary tickets to all Chamber events',
		desc3: 'Personalized business consultation and support'
	}
]

createMembershipCard(memberships);

function createMembershipCard(memberships) {
	document.querySelector(".membership-info").innerHTML = "";
	memberships.forEach(membership => {
		let card = document.createElement("div");
		card.className = 'member-level';

		let name = document.createElement("h3");
		name.innerHTML = `${membership.level}`;
		card.appendChild(name)

		let showButton = document.createElement("button");
		showButton.className = 'learn-more';
		showButton.textContent = 'Learn More';
		card.appendChild(showButton);

		document.querySelector(".membership-info").appendChild(card);

		showButton.addEventListener("click", () => {
			displayMembershipDetails(membership);
		});
		
	});
}

const membershipDetails = document.querySelector("#m-details");
function displayMembershipDetails(membership) {
	membershipDetails.innerHTML = '';
	membershipDetails.innerHTML = `
	<button id="closeModal">x</button>
        <h2>${membership.level}</h2>
        <h3>${membership.sub}</h3>
        <p class="desc1">✓ ${membership.desc1}</p>
        <p class="desc2">✓ ${membership.desc2}</p>
        <p class="desc1">✓ ${membership.desc3}</p>
	`;
	membershipDetails.showModal();

	closeModal.addEventListener("click", () => {
		membershipDetails.close();
	});
}


// FOOTER
const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[2].textContent = `©${currentYear} Biliran Chamber of Commerce`;
footerParagraphs[3].textContent = `Last modified: ${lastModifiedDate}`;