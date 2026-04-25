const sections = ['landing','main','details','end'];
let current = 0;
let started = false;

/* 🎬 IMAGE SLIDES */
const images = [
  "images/cover.jpg",
  "images/wedding.jpg",
  "images/gallery1.jpg",
  "images/gallery2.jpg"
];

let index = 0;

/* START INVITE */
function startInvite(){
  started = true;
  navigate(1);

  document.getElementById('navButtons').style.display = 'block';
  document.getElementById('bgMusic').play();

  startSlider(); // 🎬 start motion images
}

/* BACKGROUND SLIDER FUNCTION */
function startSlider(){
  const bg = document.getElementById('bgSlider');

  bg.style.backgroundImage = `url(${images[0]})`;

  setInterval(()=>{
    index = (index + 1) % images.length;
    bg.style.backgroundImage = `url(${images[index]})`;
  }, 3000); // change every 3 sec
}

/* NAVIGATION */
function navigate(d){
  const newIndex = current + d;
  if(newIndex < 0 || newIndex >= sections.length) return;

  document.getElementById(sections[current]).classList.remove('active');
  current = newIndex;
  document.getElementById(sections[current]).classList.add('active');
}

/* FUN NO BUTTON */
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseenter', ()=>{
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = 'fixed';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

/* SCROLL */
document.addEventListener('wheel', e=>{
  if(!started) return;
  navigate(e.deltaY > 0 ? 1 : -1);
});