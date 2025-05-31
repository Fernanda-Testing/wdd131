const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">Last modified: ${document.lastModified}</span>`;

const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#windSpeed");
const windChill = document.querySelector("#windChill");

const temp = parseFloat(temperature.textContent);
const windSp = parseFloat(windSpeed.textContent);

const calculateWindChill = (temperature, windSpeed) => 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);

if (temp <= 10 && windSp >= 4.8) {
    const windCh = calculateWindChill(temp, windSp);
    windChill.innerHTML = `<span class="highlight">${windCh.toFixed(1)}°C</span>`;
} else {
    windChill.textContent = "N/A";
}