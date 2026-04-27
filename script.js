let DATA = {
  stories: ["friend1.jpg","friend2.jpg"],
  posts: ["friend1.jpg","friend2.jpg"],
  reels: ["friend1.mp4","friend2.mp4"]
};

let lastTap = 0;

// PAGE SWITCH
function showPage(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

// FORMAT NAME
function formatName(file){
  return file.split('.')[0]
    .replace(/[-_]/g,' ')
    .replace(/\b\w/g,c=>c.toUpperCase());
}

// INIT
function initApp(){

// STORIES
DATA.stories.forEach((file,i)=>{
  stories.innerHTML += `
  <div class="story" onclick="openStory(${i})">
    <img src="assets/stories/${file}">
    <p>${formatName(file)}</p>
  </div>`;
});

// POSTS
DATA.posts.forEach((file,id)=>{
  let comments = JSON.parse(localStorage.getItem("c"+id)) || [];

  home.innerHTML += `
  <div class="post" ontouchend="doubleTap(event,this)">
    <div class="post-header">
      <img src="assets/images/${file}">
      <b>${formatName(file)}</b>
    </div>

    <img class="main" src="assets/images/${file}">

    <div class="actions">
      <span onclick="likePost(this)">🤍</span> 💬 📤
    </div>

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

  grid.innerHTML += `<img src="assets/images/${file}">`;
  profileGrid.innerHTML += `<img src="assets/images/${file}">`;
});

// REELS
DATA.reels.forEach(file=>{
  reels.innerHTML += `
  <div class="reel">
    <video src="assets/reels/${file}" muted loop playsinline></video>
  </div>`;
});

// AUTO PLAY
setTimeout(()=>{
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      const video = entry.target.querySelector("video");
      entry.isIntersecting ? video.play() : video.pause();
    });
  },{threshold:0.8});

  document.querySelectorAll(".reel").forEach(r=>observer.observe(r));
},500);

}

initApp();

// COMMENTS
function addComment(id){
  let val = document.getElementById("i"+id).value;
  if(!val) return;

  let arr = JSON.parse(localStorage.getItem("c"+id)) || [];
  arr.push(val);
  localStorage.setItem("c"+id, JSON.stringify(arr));

  document.getElementById("c"+id).innerHTML += `<p>${val}</p>`;
  document.getElementById("i"+id).value="";
}

// LIKE
function likePost(el){
  el.innerHTML = "❤️";
}

// DOUBLE TAP
function doubleTap(e,el){
  let now = new Date().getTime();
  if(now - lastTap < 300){
    el.querySelector("span").innerHTML="❤️";
  }
  lastTap = now;
}

// STORY
let storyIndex = 0;

function openStory(i){
  storyIndex = i;
  storyModal.classList.remove("hidden");
  showStory();
}

function showStory(){
  storyImg.src = "assets/stories/" + DATA.stories[storyIndex];
  bar.style.width = "0%";
  setTimeout(()=> bar.style.width="100%",50);

  setTimeout(()=>{
    storyIndex++;
    if(storyIndex < DATA.stories.length){
      showStory();
    } else {
      closeStory();
    }
  },3000);
}

function closeStory(){
  storyModal.classList.add("hidden");
}
