const storiesDiv = document.getElementById("stories");
const home = document.getElementById("home");
const reelsPage = document.getElementById("reelsPage");

// FORMAT NAME
function formatName(file){
  return file.split('.')[0]
    .replace(/[-_]/g,' ')
    .replace(/\b\w/g,c=>c.toUpperCase());
}

/* LOAD STORIES */
DATA.stories.forEach((file,i)=>{
  storiesDiv.innerHTML += `
    <div class="story" onclick="openStory(${i})">
      <img src="assets/stories/${file}">
      <p>${formatName(file)}</p>
    </div>
  `;
});

/* LOAD POSTS */
DATA.posts.forEach((file,id)=>{
  let comments = JSON.parse(localStorage.getItem("c"+id)) || [];

  home.innerHTML += `
  <div class="post" ontouchend="doubleTap(event)">
    
    <div class="post-header">
      <img src="assets/images/${file}">
      <b>${formatName(file)}</b>
    </div>

    <img class="main" src="assets/images/${file}">

    <div class="actions">🤍 💬 📤</div>

    <div class="caption">
      <b>${formatName(file)}</b> Best wishes 💕
    </div>

    <div class="comments" id="c${id}">
      ${comments.map(c=>`<p>${c}</p>`).join("")}
    </div>

    <div class="comment-box">
      <input id="i${id}">
      <button onclick="addComment(${id})">Post</button>
    </div>

  </div>`;
});

/* COMMENTS */
function addComment(id){
  let input = document.getElementById("i"+id);
  let val = input.value;
  if(!val) return;

  let comments = JSON.parse(localStorage.getItem("c"+id)) || [];
  comments.push(val);

  localStorage.setItem("c"+id, JSON.stringify(comments));
  location.reload();
}

/* DOUBLE TAP LIKE */
let lastTap = 0;
function doubleTap(e){
  let now = new Date().getTime();
  if(now - lastTap < 300){
    alert("❤️ Liked!");
  }
  lastTap = now;
}

/* STORIES VIEW */
function openStory(i){
  document.getElementById("storyViewer").style.display="block";
  document.getElementById("storyImg").src =
    "assets/stories/" + DATA.stories[i];

  setTimeout(()=>{
    document.getElementById("storyViewer").style.display="none";
  },3000);
}

/* REELS */
function loadReels(){
  DATA.reels.forEach(file=>{
    reelsPage.innerHTML += `
      <div class="reel">
        <video src="assets/reels/${file}" muted loop playsinline></video>
      </div>
    `;
  });

  const videos = document.querySelectorAll(".reel video");

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  },{threshold:0.7});

  videos.forEach(v=>observer.observe(v));
}

loadReels();

/* NAVIGATION */
function showHome(){
  home.style.display="block";
  reelsPage.style.display="none";
}

function showReels(){
  home.style.display="none";
  reelsPage.style.display="block";
}
