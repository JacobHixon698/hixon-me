const text = "Hello, Jacob.";
const typed = document.getElementById("typed");
const cursor = document.querySelector(".cursor");
const links = document.getElementById("links");
const footer = document.getElementById("footer");
const clock = document.getElementById("clock");

let i = 0;

function typeText() {
  if (i < text.length) {
    typed.textContent += text[i++];
    setTimeout(typeText, 85);
  } else {
    setTimeout(() => {
      links.classList.add("visible");
      setTimeout(() => footer.classList.add("visible"), 240);
    }, 300);
  }
}

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });
}

updateClock();
setInterval(updateClock, 1000);
setTimeout(typeText, 650);
