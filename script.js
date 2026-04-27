const storiesDiv = document.getElementById("stories");
const home = document.getElementById("home");
const reelsPage = document.getElementById("reelsPage");

let DATA = {};

// LOAD DATA
fetch("data.json")
.then(res=>res.json())
.then(data=>{
  DATA = data;
  init();
});

function formatName(file){
  return file.split('.')[0];
}

// INIT APP
function init(){

// STORIES
DATA.stories.forEach((file,i)=>{
  storiesDiv.innerHTML += `
    <div class="story" onclick="openStory(${i})">
      <img src="assets/stories/${file}">
      <p>${formatName(file)}</p>
    </div>`;
});

// POSTS
DATA.posts.forEach(file=>{
  home.innerHTML += `
  <div class="post">
    <div class="post-header">
      <img src="assets/images/${file}">
      <b>${formatName(file)}</b>
    </div>
    <img class="main" src="assets/images/${file}">
  </div>`;
});

// REELS (FIXED)
DATA.reels.forEach(file=>{
  reelsPage.innerHTML += `
  <div class="reel">
    <video src="assets/reels/${file}" muted loop playsinline></video>
  </div>`;
});

// AUTO PLAY REELS
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    const v = e.target.querySelector("video");
    if(e.isIntersecting){
      v.play();
    } else {
      v.pause();
    }
  });
},{threshold:0.8});

document.querySelectorAll(".reel").forEach(r=>observer.observe(r));

}

// STORY VIEW
function openStory(i){
  let viewer = document.getElementById("storyViewer");
  let img = document.getElementById("storyImg");
  let bar = document.querySelector(".progress");

  viewer.style.display="flex";
  img.src = "assets/stories/"+DATA.stories[i];

  bar.style.width="0%";
  setTimeout(()=>bar.style.width="100%",50);

  setTimeout(closeStory,3000);
}

function closeStory(){
  document.getElementById("storyViewer").style.display="none";
}

// NAVIGATION (FIXED)
function switchTab(tab){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));

if(tab==="home"){
  home.classList.add("active");
  document.querySelectorAll(".tab")[0].classList.add("active");
}

if(tab==="reels"){
  reelsPage.classList.add("active");
  document.querySelectorAll(".tab")[1].classList.add("active");
}

if(tab==="profile"){
  document.getElementById("profilePage").classList.add("active");
  document.querySelectorAll(".tab")[2].classList.add("active");
}

}
