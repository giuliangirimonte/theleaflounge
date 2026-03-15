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


// clock widget

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);

// audio widget
function toggleSound(id){

let audio = document.getElementById(id);

if(audio.paused){
audio.play();
}else{
audio.pause();
}
}

// tips widget
const tips = [
"Rotate your plants weekly.",
"Misting doesn't replace humidity.",
"Check soil before watering.",
"Bright indirect light is ideal for many plants.",
"Yellow leaves can mean overwatering.",
"Wipe dust off leaves so plants can photosynthesize better."
];

function updateTip() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("plantTip").textContent = randomTip;
}

updateTip();
setInterval(updateTip, 15000);



