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


};