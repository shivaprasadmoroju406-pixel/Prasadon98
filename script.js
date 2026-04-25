const sections = ['landing','main','details','end'];
let current = 0;
let started = false;

/* IMAGE LIST (CHECK NAMES EXACTLY) */
const images = [
  "images/cover.jpg",
  "images/wedding.jpg",
  "images/gallery1.jpg",
  "images/gallery2.jpg"
];

let sliderStarted = false;
let index = 0;

/* START */
function startInvite(){
  started = true;
  navigate(1);

  document.getElementById('navButtons').style.display = 'block';

  document.getElementById('bgMusic').play();

  startSlider();
}

/* SLIDER (NO GLITCH VERSION) */
function startSlider(){
  if(sliderStarted) return;
  sliderStarted = true;

  const bg = document.getElementById('bgSlider');

  bg.style.backgroundImage = `url(${images[0]})`;

  setInterval(()=>{
    index = (index + 1) % images.length;

    // fade out
    bg.style.opacity = 0;

    setTimeout(()=>{
      bg.style.backgroundImage = `url(${images[index]})`;
      bg.style.opacity = 1;
    }, 500);

  }, 5000); // slow cinematic
}

/* NAVIGATION */
function navigate(d){
  const next = current + d;
  if(next < 0 || next >= sections.length) return;

  document.getElementById(sections[current]).classList.remove('active');
  current = next;
  document.getElementById(sections[current]).classList.add('active');
}

/* NO BUTTON FUN */
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
