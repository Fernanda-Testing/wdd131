const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const today = new Date();

currentYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">Last modified: ${document.lastModified}</span>`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});