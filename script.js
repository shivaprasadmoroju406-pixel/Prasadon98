let lastTap = 0;

// NAVIGATION
function showPage(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

// FORMAT NAME
function formatName(file){
  return file.split('.')[0];
}

// INIT
function init(){

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
  let comments = JSON.parse(localStorage.getItem(id)) || [];

  home.innerHTML += `
  <div class="post" ontouchend="doubleTap(event,this)">
    <div class="post-header">
      <img src="assets/images/${file}">
      <b>${formatName(file)}</b>
    </div>

    <img class="main" src="assets/images/${file}">

    <div class="actions">
      <span onclick="like(this)">🤍</span> 💬 📤
    </div>

    <div class="caption"><b>${formatName(file)}</b> Best wishes 💕</div>

    <div id="c${id}">
      ${comments.map(c=>`<p>${c}</p>`).join("")}
    </div>

    <div class="comment-box">
      <input id="i${id}">
      <button onclick="comment(${id})">Post</button>
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
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      let v = e.target.querySelector("video");
      e.isIntersecting ? v.play() : v.pause();
    });
  },{threshold:0.8});

  document.querySelectorAll(".reel").forEach(r=>obs.observe(r));
},500);

}

init();

// LIKE
function like(el){
  el.innerHTML="❤️";
}

// DOUBLE TAP
function doubleTap(e,el){
  let now = new Date().getTime();
  if(now - lastTap < 300){
    el.querySelector("span").innerHTML="❤️";
  }
  lastTap = now;
}

// COMMENT
function comment(id){
  let val = document.getElementById("i"+id).value;
  if(!val) return;

  let arr = JSON.parse(localStorage.getItem(id)) || [];
  arr.push(val);
  localStorage.setItem(id,JSON.stringify(arr));

  document.getElementById("c"+id).innerHTML += `<p>${val}</p>`;
}

// STORY
let current = 0;

function openStory(i){
  current = i;
  storyModal.classList.remove("hidden");
  playStory();
}

function playStory(){
  storyImg.src = "assets/stories/" + DATA.stories[current];

  bar.style.width="0%";
  setTimeout(()=>bar.style.width="100%",50);

  setTimeout(()=>{
    current++;
    if(current < DATA.stories.length){
      playStory();
    } else closeStory();
  },3000);
}

function closeStory(){
  storyModal.classList.add("hidden");
}
