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


const projects = [
	{
		projectName : "Alina Sprite",
		imageUrl: "images/alina.webp"
	},
	{
		projectName : "Haven Sprite",
		imageUrl: "images/haven.webp"
	},
	{
		projectName : "Erato Sprite",
		imageUrl: "images/erato.webp"
	},
	{
		projectName: "Haven Sketch",
		imageUrl:"images/gallery/havensketch.webp"
	},
	{
		projectName: "The Gals Sketch",
		imageUrl: "images/gallery/triosketch.webp"
	},
	{
		projectName: "Alina Sketch",
		imageUrl: "images/gallery/alinasketch.webp"
	},
	{
		projectName: "Birthday Collab 1",
		imageUrl: "images/gallery/abday.webp"
	},
    {
		projectName: "Birthday Collab 2",
		imageUrl: "images/gallery/hbday.webp"
	},
    {
        projectName: "Kamila Illustration",
        imageUrl: "images/gallery/kamila.webp"
	},
    {
        projectName: "Birthday Collab 3",
        imageUrl: "images/gallery/ltwins.webp"
	},
    {
        projectName: "Birthday Collab 4",
        imageUrl: "images/gallery/rtwins.webp"
    },
	{
		projectName: "Alina Illustration",
		imageUrl: "images/gallery/alina-2.webp"
	},
	{
		projectName: "Haven and Alina Illustration",
		imageUrl: "images/gallery/bestieportait.webp"
	},
	{
		projectName: "DTIYS Illustration 1",
		imageUrl: "images/gallery/dtiys1.webp"
	},
	{
		projectName: "DTIYS Illustration 2",
		imageUrl: "images/gallery/dtiys2.webp"
	}
];


createArtCard(projects);


const h2Text = document.querySelector("h2");

const homeLink = document.querySelector("#gallery");
homeLink.addEventListener("click", () => {
	h2Text.textContent = `Gallery`;
	createArtCard(projects);
});

const spritesLink = document.querySelector("#sprites");
spritesLink.addEventListener("click", () => {
	h2Text.textContent = `Sprites`;
	createArtCard(projects.filter(project => project.projectName.includes("Sprite")));
});

const illustrationsLink = document.querySelector("#illustrations")
illustrationsLink.addEventListener("click", () => {
    h2Text.textContent = `Illustrations`;
    createArtCard(projects.filter(project => project.projectName.includes("Illustration")));
});

const collabLink = document.querySelector("#collabs")
collabLink.addEventListener("click", () => {
    h2Text.textContent = `Collabs`;
    createArtCard(projects.filter(project => project.projectName.includes("Collab")));
});


function createArtCard(filteredProjects) {
    document.querySelector(".projectsdiv").innerHTML = "";
	filteredProjects.forEach(project => {
		let card = document.createElement("section");
		card.className = "art-card";
		let name = document.createElement("h3");
		let img = document.createElement("img");

		name.textContent = project.projectName;
		img.setAttribute("src", project.imageUrl);
		img.setAttribute("alt", `${project.projectName}`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", "100%");
		img.setAttribute("height", "100%");


		card.appendChild(name);
		card.appendChild(img);

		document.querySelector(".projectsdiv").appendChild(card);
	})
}
