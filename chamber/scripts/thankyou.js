// HEADER
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animate');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// FOOTER
const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[2].textContent = `©${currentYear} Biliran Chamber of Commerce`;
footerParagraphs[3].textContent = `Last modified: ${lastModifiedDate}`;