const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        return data.prophets;
        // if (!data || !data.prophets) {
        //     throw new Error("Invalid data received from the API.");
        // }

        // // console.table(data.prophets);
        // displayProphets(data.prophets);
    } 
    catch (error) {
        console.error("Error fetching prophrt data:", error);
    }
}

getProphetData().then(displayProphets);

const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
    getProphetData().then(displayProphets);
});

const utahLink = document.querySelector("#utah");
utahLink.addEventListener("click", () => {
    getProphetData().then(prophets => displayProphets(prophets.filter(prophet => prophet.birthplace.includes("Utah"))));
});

const outsideLink = document.querySelector("#outside");
outsideLink.addEventListener("click", () => {
    getProphetData().then(prophets => displayProphets(prophets.filter(prophet => prophet.birthplace.includes("England"))));
});

const yearsLink = document.querySelector("#years");
yearsLink.addEventListener("click", () => {
    getProphetData().then(prophets => displayProphets(prophets.filter(prophet => prophet.length >= 15)));
});

function displayProphets(prophets) {
    document.querySelector("#cards").innerHTML = "";
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        card.className = 'c-prophets';

        let fullName = document.createElement('h2');
        fullName.className = 'name';

        let portrait = document.createElement('img');
        portrait.className = 'pic';

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', 'Portrait of ${prophet.lastname}');
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);


    });
}