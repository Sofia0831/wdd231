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
		img.setAttribute("width", "100%");
		img.setAttribute("height", "100%");

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


const puddinImg = document.querySelector("#Puddinheadart");
const mikoImg = document.querySelector("#MikoCappuccino");
const yuiImg = document.querySelector('#Yui');

const profileModal = document.querySelector("#profileModal"); 

puddinImg.addEventListener('click', () => {
    displayProfileDetails(puddinheadArts, "Puddinheadart", "https://sofiapantas.carrd.co/",
    `Self-taught digital artist from the Philippines with a love for all things geeky and artsy. Growing up, they became fascinated with anime and videogames and this interest led them to begin a hobby in drawing and eventually a dream in becoming an artist and game developer.`);
});

mikoImg.addEventListener('click', () => {
    displayProfileDetails(mikoArts, "MikoCappuccino", "https://mikocappuccino.carrd.co/",
    `Maximalist not by choice, but by disorder. An art progidy whose love for the movie 'Frozen' pushed them to pursue art during their youth. While initially focusing on semi-realism, they've started branching out towards pixel art.`);
});

yuiImg.addEventListener('click', () => {
    displayProfileDetails(yuiArts, "Yui Gaviola", "https://www.facebook.com/frosted.sardonyx",
    `Sometimes harboring many names, Yui is the literary master of Kamalayi Studio whose interests lie in the creative field. With a passion for storytelling that spans genres, they weave together rich narratives that explore the complexities of human experience. While primarily a writer, they occassionally turn to canvas and color.`);
});

function displayProfileDetails(artsData, profileName, contactLink, profileInfo) {
    profileModal.innerHTML = '';

    profileModal.innerHTML += `
        <button id="closeModal">x</button>
        <h1>${profileName}</h1>
        <p>${profileInfo}</p>
		<p><a href="${contactLink}" target="_blank" style="text-decoration: underline;">Learn More</a></p>
        <h2>ArtWorks</h2>
        <div class="profile-gallery"></div>
    `;

    const gallery = profileModal.querySelector(".profile-gallery");

    artsData.forEach(art => {
        gallery.innerHTML += `
            <section class="profile-art-card">
                <h3>${art.artTitle}</h3>
                <img src="${art.imageUrl}" alt="${art.artTitle}" loading="lazy" width="100%" height="100%">
            </section>
        `;
    });

    profileModal.showModal();

    const closeModalButton = profileModal.querySelector("#closeModal");
    closeModalButton.addEventListener("click", () => {
        profileModal.close();
    });
}






