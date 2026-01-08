// Uhr aktualisieren
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        "Uhrzeit: " + now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Zufallszitate
const quotes = [
    "Der beste Code ist der, der nicht geschrieben werden muss.",
    "Ein Projekt ist erst fertig, wenn es funktioniert.",
    "Kleine Schritte führen zu großen Ergebnissen.",
    "Konini baut coole Sachen!"
];

document.getElementById("quote").textContent =
    quotes[Math.floor(Math.random() * quotes.length)];

// API testen
function loadInfo() {
    fetch("/api/info")
        .then(r => r.json())
        .then(data => {
            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);
        })
        .catch(() => {
            document.getElementById("output").textContent =
                "API nicht erreichbar (lokaler Server läuft nicht).";
        });
}