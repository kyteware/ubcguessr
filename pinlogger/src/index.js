import './styles.css';

let logButton = document.getElementById("logbutton");
let lastpinButton = document.getElementById("lastpin");
let logsElement = document.getElementById("logs");
let logListElement = document.getElementById("logList");
var hidden = true;

// checkboxes
let indoorsCheck = document.getElementById("indoors")
let lectureHallCheck = document.getElementById("inLectureHall");
let specialCheck = document.getElementById("special")

const map = L.map('map').setView([49.2657913160942, -123.24934646027087], 18);
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
    
    let indoors = indoorsCheck.checked;
    let inLectureHall = lectureHallCheck.checked;
    let special = specialCheck.checked;

    log.indoors = indoors;
    log.inLectureHall = inLectureHall;
    log.special = special;

    logs.push(log);

    let row = document.createElement("li");
    row.textContent = "Time: " + log.time + " Lat: " + log.lat + " Long: " + log.long
    logListElement.appendChild(row);

    fetch('/api/logs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(log)
    })
        .then(response => {
            if (!response.ok) {
                row.textContent = "NOT UPLOADED: " + row.textContent;
            }
        });

    console.log("successfully responded to log button")
});

lastpinButton.addEventListener('click', () => {
    if (hidden === false) {
        logsElement.style.display = "none";
        hidden = true;
    }
    else {
        logsElement.style.display = "block";
        hidden = false;
    }
});
