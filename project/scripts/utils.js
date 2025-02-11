export function toggleMenu(hamButton, navigation) {
  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });
}

export function updateFooter(footerElement) {
  const currentYear = new Date().getFullYear();
  const lastModifiedDate = document.lastModified;

  const footerParagraphs = footerElement.querySelectorAll("p");
    footerParagraphs[0].textContent = `Copyright © ${currentYear} KAMALAYI STUDIO. Philippines`;
    footerParagraphs[1].textContent = `Last modified: ${lastModifiedDate}`;

}