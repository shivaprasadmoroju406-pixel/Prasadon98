let sections = document.querySelectorAll(".section");
let current = 0;

let images = [
  "assets/bg1.jpg",
  "assets/bg2.jpg",
  "assets/bg3.jpg",
  "assets/bg4.jpg"
];

let bg = document.getElementById("bgSlider");
let imgIndex = 0;

/* BACKGROUND SLIDER */
setInterval(() => {
  imgIndex = (imgIndex + 1) % images.length;
  bg.style.backgroundImage = `url(${images[imgIndex]})`;
}, 3000);

/* INITIAL BG */
bg.style.backgroundImage = `url(${images[0]})`;

/* START INVITE */
function startInvite() {
  document.getElementById("bgMusic").play();
  showSection(1);
}

/* NAVIGATION */
function navigate(dir) {
  let next = current + dir;

  if (next >= 0 && next < sections.length) {
    showSection(next);
  }
}

function showSection(index) {
  sections[current].classList.remove("active");
  current = index;
  sections[current].classList.add("active");
}

/* ESCAPING NO BUTTON 😏 */
let noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  let x = Math.random() * window.innerWidth - 100;
  let y = Math.random() * window.innerHeight - 50;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
