const projectUrl = 'data/projects.json';
const cards = document.querySelector('.projectsdiv');
let projects = [];

async function getProjectData() {
	try {
		const response = await fetch(projectUrl);
		if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

		const data = await response.json();
		projects = data.projects;
		return projects;
	}
	catch(error) {
		console.error("Error fetching project data:", error);
		return [];
	}

}

getProjectData().then(createArtCard)


function createArtCard(filteredProjects) {
    document.querySelector(".projectsdiv").innerHTML = "";
	filteredProjects.forEach(project => {
		const card = document.createElement("section");
		card.className = "art-card";
		const name = document.createElement("h3");
		name.textContent = project.projectName;

		const info = document.createElement("div");
		info.className = "info";
		info.innerHTML = `
		<p>${project.artist}</p>
		<p>${project.date}</p>
		`;

		const img = document.createElement("img");
		img.setAttribute("src", project.imageUrl);
		img.setAttribute("alt", `${project.projectName}`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", "100%");
		img.setAttribute("height", "100%");


		card.appendChild(name);
		card.appendChild(img);
		card.appendChild(info);

		document.querySelector(".projectsdiv").appendChild(card);
	})
}


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

