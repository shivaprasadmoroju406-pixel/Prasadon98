/* ===== NAVIGATION ===== */
function showPage(pageId){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

/* ===== COUNTDOWN ===== */
const weddingDate = new Date("May 1, 2026 10:00:00");

setInterval(()=>{
  const now = new Date();
  const diff = weddingDate - now;
  const days = Math.floor(diff/(1000*60*60*24));

  document.getElementById("countdown").innerText =
    "⏳ " + days + " days to go";
},1000);

/* ===== CALENDAR ===== */
function addToCalendar(){
  const url = "https://calendar.google.com/calendar/render?action=TEMPLATE"
  +"&text=Deekshitha & Prasad Wedding"
  +"&dates=20260501T100000/20260501T120000"
  +"&location=Hyderabad Wedding Hall";

  window.open(url);
}

/* ===== PROFILE ===== */
const profileGallery = document.getElementById("profileGallery");

data.profile.forEach(file=>{
  const img = document.createElement("img");
  img.src = "assets/profile/" + file;

  img.onclick = ()=>{
    if(file.includes("reel")){
      showPage("reelsPage");
    } else {
      showPage("homePage");
    }
  };

  profileGallery.appendChild(img);
});

/* ===== STORIES ===== */
const storiesDiv = document.getElementById("stories");

data.stories.forEach(file=>{
  const div = document.createElement("div");
  div.className = "story";

  div.innerHTML = `<img src="assets/stories/${file}">`;

  storiesDiv.appendChild(div);
});

/* ===== POSTS ===== */
const postsDiv = document.getElementById("posts");

data.images.forEach(file=>{
  const img = document.createElement("img");
  img.src = "assets/images/" + file;

  postsDiv.appendChild(img);
});

/* ===== REELS ===== */
const reelsPage = document.getElementById("reelsPage");

data.reels.forEach(file=>{
  const div = document.createElement("div");
  div.className = "reel";

  div.innerHTML = `
    <video src="assets/reels/${file}" autoplay loop muted></video>
  `;

  reelsPage.appendChild(div);
});
