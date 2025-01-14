import './styles.css';

let logButton = document.getElementById("logbutton");
let lastpinButton = document.getElementById("lastpin");
let logsElement = document.getElementById("logs");
let logListElement = document.getElementById("logList");
var hidden = true;

const map = L.map('map').setView([49.2657913160942, -123.24934646027087], 15);
var logs = [];

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

logButton.addEventListener('click', () => {
    const center = map.getCenter();
    L.marker(center).addTo(map);
    var log = {};
    log.time = (new Date()).toLocaleTimeString();
    log.lat = center.lat;
    log.long = center.lng;
    logs.push(log);

    let row = document.createElement("li");
    row.textContent = "Time: " + log.time + " Lat: " + log.lat + " Long: " + log.long
    logListElement.appendChild(row);
});

lastpinButton.addEventListener('click', () => {
    console.log(logsElement);
    if (hidden === false) {
        logsElement.style.display = "none";
        hidden = true;
    }
    else {
        logsElement.style.display = "block";
        hidden = false;
    }
});
