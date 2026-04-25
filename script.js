const sections = ['landing','main','details','end'];
let current = 0;
let started = false;
let busy = false;

/* START */
function startInvite(){
  started = true;
  goTo(1);
  document.getElementById('navButtons').style.display='flex';
}

/* NAVIGATION */
function goTo(i){
  if(i<0 || i>=sections.length || busy) return;

  busy = true;

  document.getElementById(sections[current]).classList.remove('active');
  current = i;
  document.getElementById(sections[current]).classList.add('active');

  setTimeout(()=>busy=false,400);
}

function navigate(d){
  if(!started) return;
  goTo(current + d);
}

/* RUNAWAY NO BUTTON */
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseenter', moveNoButton);

function moveNoButton(){
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = 'fixed';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
}

/* MOBILE TOUCH ESCAPE */
noBtn.addEventListener('touchstart', (e)=>{
  e.preventDefault();
  moveNoButton();
});

/* SCROLL NAVIGATION */
let t;
document.addEventListener('wheel', e=>{
  if(!started) return;

  clearTimeout(t);
  t = setTimeout(()=>{
    navigate(e.deltaY > 0 ? 1 : -1);
  },50);
});

/* TOUCH SWIPE */
let y = 0;

document.addEventListener('touchstart', e=>{
  y = e.touches[0].clientY;
});

document.addEventListener('touchend', e=>{
  if(!started) return;

  let dy = y - e.changedTouches[0].clientY;

  if(Math.abs(dy) > 50){
    navigate(dy > 0 ? 1 : -1);
  }
});

/* KEYBOARD */
window.addEventListener('keydown', e=>{
  if(!started) return;

  if(e.key === 'ArrowDown') navigate(1);
  if(e.key === 'ArrowUp') navigate(-1);
});