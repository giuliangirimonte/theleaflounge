//   nav bar
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      hamburger.textContent = "☰";
    } else {
      hamburger.textContent = "∷";
    }
  });

// search bar
function searchPlants() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".plantBox");
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(input)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

//   calender event 
function downloadPlantEvent(name) {
  const plant = plantsData[name];
  if (!plant) return alert("Plant data not found!");

// this uses the JS date object to get the info for the calender event
  const today = new Date();
  const yyyy = today.getFullYear();
//  this ensures that any single digit months or days start with a zero
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
// makes it a string that ICS reads 
  const startDate = `${yyyy}${mm}${dd}`;

  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Water Your ${name} Plant
DESCRIPTION:Sunlight: ${plant.sun}\\nSoil: ${plant.soil}\\nHumidity: ${plant.humidity}\\nTemperature: ${plant.temp}
URL: https://giuliangirimonte.github.io/theleaflounge/index.html
DTSTART;VALUE=DATE:${startDate}
DTEND;VALUE=DATE:${startDate}
RRULE:FREQ=DAILY;INTERVAL=${plant.repeat}
END:VEVENT
END:VCALENDAR
  `.trim();

  const blob = new Blob([icsContent], { type: 'text/calendar' });
//   makes a temporary url with the ICS file 
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name}-Care.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

// plant data

const plantsData = {
 "Aglaonema": {
    sun: "Low - Prefers indirect sunlight",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 10,
  },

"Alocasia": {
    sun: "Low - Prefers indirect sunlight",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Aloe": {
    sun: "Medium/High - Prefers bright indirect sunlight",
    soil: "Well-Drained",
    humidity: "Low",
    temp: "Warm",
    repeat: 14,
  },
 
"Anthurium": {
    sun: "Medium/High - Prefers bright indirect sunlight",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Apoballis": {
    sun: "Medium/High - Prefers bright indirect sunlight",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Arabica": {
    sun: "Medium/High - Prefers bright indirect sunlight",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Aralia": {
    sun: "Medium/High - Prefers bright indirect sunlight",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Begonia": {
    sun: "Low - Avoid direct sunlight",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Strelitzia": {
    sun: "Low - Partial Shade",
    soil: "Well-Drained",
    humidity: "Medium/High",
    temp: "Warm",
    repeat: 7,
  },

"Bonsai": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium/High",
    temp: "Warm",
    repeat: 7,
  },

"Bromeliad": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Cactus": {
    sun: "High - Bright Direct Light",
    soil: "Well-Drained",
    humidity: "Low",
    temp: "Warm",
    repeat: 14,
  },

"Calathea": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 10,
  },

"Clusia": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 10,
  },

"Plectranthus": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Cordyline": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Croton": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Cryptanthus": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 10,
  },

"Ctenanthe": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Dieffenbachia": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Dracaena": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium",
    temp: "Warm",
    repeat: 10,
  },

"Echeveria": {
    sun: "High - Bright Direct Light",
    soil: "Very Well-Drained",
    humidity: "Low",
    temp: "Warm",
    repeat: 14,
  },

"Epiphyllum": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium/High",
    temp: "Warm",
    repeat: 7,
  },

"Fern": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium/High",
    temp: "Warm",
    repeat: 7,
  },

"Ficus": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium/High",
    temp: "Warm",
    repeat: 7,
  },

"Fittonia": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Gerbera": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium",
    temp: "Warm",
    repeat: 7,
  },

"Guzmania": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 10,
  },

"Homalomena": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Hoya": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Hydrangea": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium",
    temp: "Warm",
    repeat: 7,
  },

"Hypoestes": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Hedera": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium",
    temp: "Warm",
    repeat: 7,
  },

"Aeschynanthus": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Maranta": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Pachira": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Monstera": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Nematanthus": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Urtica": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium",
    temp: "Low-Warm",
    repeat: 7,
  },

"Olea": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 14,
  },

"Orchid": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 10,
  },

"Palm": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Spathiphyllum": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Peperomia": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 10,
  },

"Philodendron": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 10,
  },

"Euphorbia": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium",
    temp: "Warm",
    repeat: 7,
  },


"Epipremnum": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium/High",
    temp: "Warm",
    repeat: 10,
  },

"Rhaphidophora": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Schefflera": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium/High",
    temp: "Warm",
    repeat: 7,
  },

"Scindapsus": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 10,
  },

"Sansevieria": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "Low/Medium",
    temp: "Warm",
    repeat: 14,
  },

"Chlorophytum": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium",
    temp: "Warm",
    repeat: 7,
  },

"Stromanthe": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Succulent": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium",
    temp: "Warm",
    repeat: 7,
  },

"Syngonium": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Tradescantia": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Well-Drained",
    humidity: "Medium",
    temp: "Warm",
    repeat: 7,
  },

"Tillandsia": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Does Not Require Soil",
    humidity: "High",
    temp: "Warm",
    repeat: 7,
  },

"Yucca": {
    sun: "Medium/High - Bright Indirect Light",
    soil: "Does Not Require Soil",
    humidity: "Medium",
    temp: "Warm",
    repeat: 7,
  },

"Zamioculcas": {
    sun: "Low - Indirect Light",
    soil: "Well-Drained",
    humidity: "Low/Medium",
    temp: "Warm",
    repeat: 14,
  },

};