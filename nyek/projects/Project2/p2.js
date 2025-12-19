const rocket = document.getElementById("rocket");
const launchBtn = document.getElementById("launchBtn");

const colorText = document.getElementById("colorText");
const speedText = document.getElementById("speedText");
const statusText = document.getElementById("statusText");

const colors = [
  { name: "Neon Pink", value: "#f472b6" },
  { name: "Electric Purple", value: "#a855f7" },
  { name: "Cyber Blue", value: "#22d3ee" },
  { name: "Lime Green", value: "#4ade80" },
  { name: "Fire Orange", value: "#fb923c" }
];

const statuses = [
  "Successful Launch 🚀",
  "Minor Turbulence ⚠️",
  "Perfect Flight ✨",
  "Engine Boost Engaged 🔥",
  "Landing Successful 🛬"
];

launchBtn.addEventListener("click", () => {
  // reset animation
  rocket.classList.remove("launch");
  void rocket.offsetWidth;

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomSpeed = Math.floor(Math.random() * 5) + 1;
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  rocket.style.background = randomColor.value;

  colorText.textContent = randomColor.name;
  speedText.textContent = randomSpeed + "x speed";
  statusText.textContent = randomStatus;

  rocket.classList.add("launch");
});
