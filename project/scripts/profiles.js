const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;


const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[0].textContent = `Copyright ©️ ${currentYear} KAMALAYI STUDIOS. Philippines`;
footerParagraphs[1].textContent = `Last modified: ${lastModifiedDate}`;


const profiles = [
	{
		profileName: "MikoCappuccino",
		titleName: "Artist Corner",
		imageUrl: "images/mikosprite.png"
	},
	{
		profileName: "Puddinheadart",
		titleName:"Computer Room",
		imageUrl: "images/puddinsprite.png"
	},
	{
		profileName: "Yui",
		titleName: "Writing Desk",
		imageUrl: "images/yuisprite.png"
	}
];


createProfileCard();


function createProfileCard(){
	profiles.forEach(profile => {
		let card = document.createElement("section");
		card.className = "profiles-card";
		let title = document.createElement("h3");
		let name = document.createElement("h4");
		let link = document.createElement("a");
		let img = document.createElement("img");

		title.textContent = profile.titleName;
		name.textContent = profile.profileName;
		img.setAttribute("src", profile.imageUrl);
		img.setAttribute("alt", `a pixelated sprite of ${profile.profileName}`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", "320");
		img.setAttribute("height", "217");

		link.setAttribute("href", "#");
		link.setAttribute("id",`${profile.profileName}`);
		link.setAttribute("title", `${profile.profileName}`);

		if (profile.titleName === "Artist Corner")
		{
			title.classList.add("miko");
		}
		else if (profile.titleName === "Computer Room")
		{
			title.classList.add("puddin");
		}
		else if (profile.titleName === "Writing Desk") 
		{
			title.classList.add("yui");
		}

		link.appendChild(img);

		card.appendChild(title);
		card.appendChild(name);
		card.appendChild(link);

		document.querySelector(".projectsdiv").appendChild(card);
	})
}

const puddinheadArts = [
	{
		artTitle: "Birthday Collab 1",
		imageUrl: "images/gallery/abday.webp"
	},
    {
		artTitle: "Birthday Collab 2",
		imageUrl: "images/gallery/hbday.webp"
	},
	{
		artTitle: "Baybay Friends",
		imageUrl: "images/puddinhead/baybay.webp"
	},
	{
		artTitle: "DTIYS Illustration 2",
		imageUrl: "images/gallery/dtiys2.webp"
	},
	{
		artTitle: "Haven Sketch",
		imageUrl: "images/gallery/havensketch.webp"
	},
	{
		artTitle: "Ameri Azazel",
		imageUrl: "images/puddinhead/ameriazazel.webp"
	},
	{
		artTitle: "Rapacity-Commission",
		imageUrl: "images/puddinhead/commission.webp"
	},
	{
		artTitle: "One Palette Challenge",
		imageUrl: "images/puddinhead/onepalette.webp"
	},
	{
		artTitle: "Golden Hour",
		imageUrl: "images/puddinhead/goldenhour.webp"
	},
	{
		artTitle: "Lucas-Commission",
		imageUrl: "images/puddinhead/lucas.webp"
	},
	{
		artTitle: "UP Lente Arts Week",
		imageUrl: "images/puddinhead/uplenteartsweek.webp"
	},
	{
		artTitle: "Pokemon Girls",
		imageUrl: "images/puddinhead/pokemongirls.webp"
	},
	{
		artTitle: "The Lovers DTIYS",
		imageUrl: "images/puddinhead/theloversdtiys.webp"
	},
	{
		artTitle: "VC Collab",
		imageUrl: "images/puddinhead/vccollab.webp"
	},
	{
		artTitle: "Patolini-Commission",
		imageUrl: "images/puddinhead/commission3.webp"
	},
];

let puddinInfoDisplayed = false;
const puddinImg = document.querySelector("#Puddinheadart");
puddinImg.addEventListener('click', () => {
	if (!puddinInfoDisplayed)
	{
		puddinInfoDisplayed = true;

		const puddinInfo = document.createElement("div");
		puddinInfo.className = "profile-info";

		const name = document.createElement("h1");
		name.textContent = `Puddinheadart`;
		puddinInfo.appendChild(name);

		const contact = document.createElement("a");
		contact.textContent = `Puddinhead's Carrd`;
		contact.href = "https://sofiapantas.carrd.co/"
		contact.target = "_blank";
        contact.style.textDecoration = "underline";

		const website = document.createElement("p");
		website.textContent = `Website: `;
		website.appendChild(contact);
		puddinInfo.appendChild(website);

		const info = document.createElement("p");
		info.textContent = `Self-taught digital artist from the Philippines with a love for all things geeky and artsy. Growing up, they became fascinated with anime and videogames and this interest led them to begin a hobby in drawing and eventually a dream in becoming an artist and game developer.`;
		puddinInfo.appendChild(info);

		const galleryTitle = document.createElement("h2");
		galleryTitle.textContent = `ArtWork Gallery`;
		puddinInfo.appendChild(galleryTitle);

		const gallery = document.createElement("div");
		gallery.className = "profile-gallery";
		puddinInfo.appendChild(gallery);

		puddinheadArts.forEach(art => {
			let puddinCard = document.createElement("section");
			puddinCard.className = "profile-art-card";
			let artName = document.createElement("h3");
			let artImg = document.createElement("img");
			artName.textContent = art.artTitle;
			artImg.setAttribute("src", art.imageUrl);
			artImg.setAttribute("alt", `${art.artTitle}`);
			artImg.setAttribute("loading", "lazy");
			artImg.setAttribute("width", "100%");
			artImg.setAttribute("height", "100%");
			puddinCard.appendChild(artName);
			puddinCard.appendChild(artImg);

			gallery.appendChild(puddinCard);
		});

		document.querySelector("main").appendChild(puddinInfo);

		const closeButton = document.createElement("button");
		closeButton.className = "profile-button"
        closeButton.textContent = `Close`;
        closeButton.addEventListener('click', () => {
            puddinInfo.remove();
            puddinInfoDisplayed = false;
        });
        puddinInfo.appendChild(closeButton);
	}

});

const mikoArts = [
	{
		artTitle: "Alina Sprite",
		imageUrl: "images/alina.webp"
	},
	{
		artTitle: "Haven Sprite",
		imageUrl: "images/haven.webp"
	},
	{
		artTitle: "Erato Sprite",
		imageUrl: "images/erato.webp"
	},
	{
		artTitle: "Sailor Neptune",
		imageUrl: "images/miko/sailorneptune.webp"
	},
	{
		artTitle: "Jessie Mei Li Sketch",
		imageUrl: "images/miko/jessie.webp"
	},
	{
		artTitle: "Alina Illustration",
		imageUrl: "images/gallery/alina-2.webp"
	},
	{
		artTitle: "DTIYS 1",
		imageUrl: "images/gallery/dtiys1.webp"
	},
	{
		artTitle: "Haven and Alina Illustration",
		imageUrl: "images/gallery/bestieportait.webp"
	},
	{
		artTitle: "Kamila Illustration",
		imageUrl: "images/gallery/kamila.webp"
	},
	{
		artTitle: "Clownie",
		imageUrl: "images/miko/clownie.webp"
	},
	{
		artTitle: "Spider Julia",
		imageUrl: "images/miko/spiderjulia.webp"
	},
	{
		artTitle: "Vi",
		imageUrl: "images/miko/vi.webp"
	},
	{
		artTitle: "Beret Girl",
		imageUrl: "images/miko/beret.webp"
	},
	{
		artTitle: "Birthday Collab 1",
		imageUrl: "images/gallery/ltwins.webp"
	},
	{
		artTitle: "Birthday Collab 2",
		imageUrl: "images/gallery/rtwins.webp"
	},

	
];

let mikoInfoDisplayed = false;
const mikoImg = document.querySelector("#MikoCappuccino");
mikoImg.addEventListener('click', () =>{
	if (!mikoInfoDisplayed)
	{
		mikoInfoDisplayed = true;

		const mikoInfo = document.createElement("div");
		mikoInfo.className = "profile-info";

		const name = document.createElement("h1");
		name.textContent = `MikoCappuccino`;
		mikoInfo.appendChild(name);

		const contact = document.createElement("a");
		contact.textContent = `MikoCappuccino's Carrd`;
		contact.href = "https://mikocappuccino.carrd.co/"
		contact.target = "_blank";
        contact.style.textDecoration = "underline";

		const website = document.createElement("p");
		website.textContent = `Website: `
		website.appendChild(contact);
		mikoInfo.appendChild(website);

		const info = document.createElement("p");
		info.textContent = `Maximalist not by choice, but by disorder. An art progidy whose love for the movie 'Frozen' pushed them to pursue art during their youth. While initially focusing on semi-realism, they've started branching out towards pixel art.`;
		mikoInfo.appendChild(info);

		const galleryTitle = document.createElement("h2");
		galleryTitle.textContent = `ArtWork Gallery`;
		mikoInfo.appendChild(galleryTitle);

		const gallery = document.createElement("div");
		gallery.className = "profile-gallery";
		mikoInfo.appendChild(gallery);

		mikoArts.forEach(art => {
			let mikoCard = document.createElement("section");
			mikoCard.className = "profile-art-card";
			let artName = document.createElement("h3");
			let artImg = document.createElement("img");
			artName.textContent = art.artTitle;
			artImg.setAttribute("src", art.imageUrl);
			artImg.setAttribute("alt", `${art.artTitle}`);
			artImg.setAttribute("loading", "lazy");
			artImg.setAttribute("width", "100%");
			artImg.setAttribute("height", "100%");
			mikoCard.appendChild(artName);
			mikoCard.appendChild(artImg);

			gallery.appendChild(mikoCard);
			
		});

		document.querySelector("main").appendChild(mikoInfo);

		const closeButton = document.createElement("button");
		closeButton.className = "profile-button"
        closeButton.textContent = `Close`;
        closeButton.addEventListener('click', () => {
            mikoInfo.remove();
            mikoInfoDisplayed = false;
        });
        mikoInfo.appendChild(closeButton);
	}
});

const yuiArts = [
	{
		artTitle: "Little Nightmares",
		imageUrl: "images/yui/littlenightmares.webp"
	},
	{
		artTitle: "Rekka",
		imageUrl: "images/yui/rekka.webp"
	},
	{
		artTitle: "Zyra",
		imageUrl: "images/yui/zyra.webp"
	},
	{
		artTitle: "Support",
		imageUrl: "images/yui/comic.webp"
	}
];

let yuiInfoDisplayed = false;
const yuiImg = document.querySelector('#Yui');
yuiImg.addEventListener('click', () =>{
	if (!yuiInfoDisplayed)
	{
		yuiInfoDisplayed = true;

		const yuiInfo = document.createElement("div");
		yuiInfo.className = "profile-info";

		const name = document.createElement("h1");
		name.textContent = `Yui Gaviola`;
		yuiInfo.appendChild(name);

		const contact = document.createElement("a");
		contact.textContent = `Art Profile`;
		contact.href = "https://www.facebook.com/frosted.sardonyx"
		contact.target = "_blank";
        contact.style.textDecoration = "underline";

		const website = document.createElement("p");
		website.textContent = `Website: `
		website.appendChild(contact);
		yuiInfo.appendChild(website);

		const info = document.createElement("p");
		info.textContent = `Sometimes harboring many names, Yui is the literary master of Kamalayi Studio whose interests lie in the creative field. With a passion for storytelling that spans genres, they weave together rich narratives that explore the complexities of human experience. While primarily a writer, they occassionally turn to canvas and color.`;
		yuiInfo.appendChild(info);

		const galleryTitle = document.createElement("h2");
		galleryTitle.textContent = `ArtWork Gallery`;
		yuiInfo.appendChild(galleryTitle);

		const gallery = document.createElement("div");
		gallery.className = "profile-gallery";
		yuiInfo.appendChild(gallery);

		yuiArts.forEach(art => {
			let yuiCard = document.createElement("section");
			yuiCard.className = "profile-art-card";
			let artName = document.createElement("h3");
			let artImg = document.createElement("img");
			artName.textContent = art.artTitle;
			artImg.setAttribute("src", art.imageUrl);
			artImg.setAttribute("alt", `${art.artTitle}`);
			artImg.setAttribute("loading", "lazy");
			artImg.setAttribute("width", "100%");
			artImg.setAttribute("height", "100%");
			yuiCard.appendChild(artName);
			yuiCard.appendChild(artImg);

			gallery.appendChild(yuiCard);
		});

		document.querySelector("main").appendChild(yuiInfo);

		const closeButton = document.createElement("button");
		closeButton.className = "profile-button"
        closeButton.textContent = `Close`;
        closeButton.addEventListener('click', () => {
            yuiInfo.remove();
            yuiInfoDisplayed = false;
        });
        yuiInfo.appendChild(closeButton);

	}
});





