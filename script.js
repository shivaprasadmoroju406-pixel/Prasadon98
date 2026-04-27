// DATA (EDIT HERE)
const stories = [
  {name:"Aarav", img:"assets/story1.jpg"},
  {name:"Meera", img:"assets/story2.jpg"},
  {name:"Kabir", img:"assets/story3.jpg"}
];

const posts = [
  {
    user:"Meera",
    profile:"assets/story2.jpg",
    image:"assets/post1.jpg",
    caption:"Best wishes from friends 💕"
  },
  {
    user:"Kabir",
    profile:"assets/story3.jpg",
    image:"assets/post2.jpg",
    caption:"Forever together ❤️"
  }
];

const reelsData = [
  {video:"assets/reel1.mp4"},
  {video:"assets/reel2.mp4"}
];

// LOAD STORIES
const storyContainer = document.getElementById("stories");
stories.forEach((s,i)=>{
  storyContainer.innerHTML += `
    <div class="story" onclick="openStory(${i})">
      <img src="${s.img}">
      <p>${s.name}</p>
    </div>
  `;
});

// LOAD POSTS
const feed = document.getElementById("feed");
posts.forEach(p=>{
  feed.innerHTML += `
    <div class="post">
      <div class="post-header">
        <img src="${p.profile}">
        <b>${p.user}</b>
      </div>
      <img class="main" src="${p.image}">
      <div class="actions">❤️ 💬 ✈️</div>
      <div class="caption"><b>${p.user}</b> ${p.caption}</div>
    </div>
  `;
});

// LOAD REELS
const reels = document.getElementById("reels");
reelsData.forEach(r=>{
  reels.innerHTML += `
    <div class="reel">
      <video src="${r.video}" muted loop></video>
    </div>
  `;
});

// STORY MODAL
function openStory(i){
  document.getElementById("storyModal").classList.remove("hidden");
  document.getElementById("storyImg").src = stories[i].img;
}

function closeStory(){
  document.getElementById("storyModal").classList.add("hidden");
}

// NAVIGATION
function showReels(){
  document.getElementById("reels").classList.remove("hidden");
  document.getElementById("feed").style.display="none";
}

function showHome(){
  document.getElementById("reels").classList.add("hidden");
  document.getElementById("feed").style.display="block";
}

// AUTO PLAY REELS
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    const video = entry.target.querySelector("video");
    if(entry.isIntersecting){
      video.play();
    } else {
      video.pause();
    }
  });
},{threshold:0.6});

document.querySelectorAll(".reel").forEach(r=>{
  observer.observe(r);
});