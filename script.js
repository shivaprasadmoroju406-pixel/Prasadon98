function formatName(file){
  return file.split('.')[0]
    .replace(/[-_]/g,' ')
    .replace(/\b\w/g,c=>c.toUpperCase());
}

// STORIES
DATA.stories.forEach((file,i)=>{
  const name = formatName(file);

  stories.innerHTML += `
  <div class="story" onclick="openStory(${i})">
    <img src="assets/stories/${file}">
    <p>${name}</p>
  </div>`;
});

// POSTS
DATA.posts.forEach((file,id)=>{
  const name = formatName(file);
  let comments = JSON.parse(localStorage.getItem("c"+id)) || [];

  home.innerHTML += `
  <div class="post" ontouchend="doubleTap(event,this)">
    
    <div class="post-header">
      <img src="assets/images/${file}">
      <b>${name}</b>
    </div>

    <img class="main" src="assets/images/${file}">

    <div class="actions">🤍 💬 📤</div>

    <div class="caption"><b>${name}</b> Best wishes 💕</div>

    <div class="comments" id="c${id}">
      ${comments.map(c=>`<p>${c}</p>`).join("")}
    </div>

    <div class="comment-box">
      <input id="i${id}">
      <button onclick="addComment(${id})">Post</button>
    </div>

  </div>`;
});

// COMMENTS
function addComment(id){
  const input = document.getElementById("i"+id);
  let comments = JSON.parse(localStorage.getItem("c"+id)) || [];

  comments.push(input.value);
  localStorage.setItem("c"+id, JSON.stringify(comments));

  location.reload();
}

// DOUBLE TAP
let lastTap = 0;
function doubleTap(e,el){
  let now = new Date().getTime();
  if(now - lastTap < 300){
    const heart = document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    el.appendChild(heart);
    setTimeout(()=>heart.remove(),600);
  }
  lastTap = now;
}

// STORY
function openStory(i){
  storyModal.classList.remove("hidden");
  storyImg.src = "assets/stories/"+DATA.stories[i];

  bar.style.width="0%";
  setTimeout(()=>{ bar.style.width="100%"; },100);

  setTimeout(closeStory,3000);
}

function closeStory(){
  storyModal.classList.add("hidden");
}

// REELS
DATA.reels.forEach(file=>{
  reels.innerHTML += `
  <div class="reel">
    <video src="assets/reels/${file}" muted loop></video>
  </div>`;
});

setTimeout(()=>{
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      const v = e.target.querySelector("video");
      e.isIntersecting ? v.play() : v.pause();
    });
  },{threshold:0.7});

  document.querySelectorAll(".reel").forEach(r=>obs.observe(r));
},500);

// SEARCH + PROFILE GRID
[...DATA.posts].forEach(file=>{
  grid.innerHTML += `<img src="assets/images/${file}">`;
  profileGrid.innerHTML += `<img src="assets/images/${file}">`;
});

// NAV
function showTab(tab){
  ["home","reels","search","profile"].forEach(id=>{
    document.getElementById(id).classList.add("hidden");
  });
  document.getElementById(tab).classList.remove("hidden");
}

// SHARE
function shareSite(){
  if(navigator.share){
    navigator.share({title:"Wedding",url:location.href});
  } else {
    navigator.clipboard.writeText(location.href);
    alert("Link copied!");
  }
}
