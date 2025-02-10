const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;


document.addEventListener('DOMContentLoaded', () => {
	const fadingElement = document.querySelector('.socials');
	fadingElement.classList.add('visible');
});


const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[0].textContent = `Copyright ©️ ${currentYear} KAMALAYI STUDIOS. Philippines`;
footerParagraphs[1].textContent = `Last modified: ${lastModifiedDate}`;
