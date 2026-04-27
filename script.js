// DATA
const stories = [
  {name:"Aarav", img:"assets/story1.jpg"},
  {name:"Meera", img:"assets/story2.jpg"}
];

const posts = [
  {
    id:1,
    user:"Meera",
    profile:"assets/story2.jpg",
    image:"assets/post1.jpg",
    caption:"Best wishes 💕"
  }
];

const reelsData = [
  {video:"assets/reel1.mp4"}
];

const gridImages = [
  "assets/post1.jpg",
  "assets/post2.jpg",
  "assets/qr1.png"
];

// STORIES
stories.forEach((s,i)=>{
  document.getElementById("stories").innerHTML += `
  <div class="story" onclick="openStory(${i})">
    <img src="${s.img}">
    <p>${s.name}</p>
  </div>`;
});

// POSTS + COMMENTS
posts.forEach(p=>{
  const comments = JSON.parse(localStorage.getItem("c"+p.id)) || [];

  let commentsHTML = comments.map(c=>`<p>${c}</p>`).join("");

  document.getElementById("home").innerHTML += `
  <div class="post">
    <div class="post-header">
      <img src="${p.profile}">
      <b>${p.user}</b>
    </div>

    <img class="main" src="${p.image}">

    <div class="actions">
      ❤️ 💬 <span onclick="shareSite()">📤</span>
    </div>

    <div class="caption"><b>${p.user}</b> ${p.caption}</div>

    <div class="comments" id="c${p.id}">
      ${commentsHTML}
    </div>

    <div class="comment-box">
      <input id="i${p.id}" placeholder="Add comment">
      <button onclick="addComment(${p.id})">Post</button>
    </div>
  </div>`;
});

// ADD COMMENT
function addComment(id){
  const input = document.getElementById("i"+id);
  let comments = JSON.parse(localStorage.getItem("c"+id)) || [];

  comments.push(input.value);
  localStorage.setItem("c"+id, JSON.stringify(comments));

  location.reload();
}

// STORY
function openStory(i){
  document.getElementById("storyModal").classList.remove("hidden");
  document.getElementById("storyImg").src = stories[i].img;
}

function closeStory(){
  document.getElementById("storyModal").classList.add("hidden");
}

// REELS
reelsData.forEach(r=>{
  document.getElementById("reels").innerHTML += `
  <div class="reel">
    <video src="${r.video}" muted loop autoplay></video>
  </div>`;
});

// SEARCH GRID
gridImages.forEach(img=>{
  document.getElementById("grid").innerHTML += `<img src="${img}">`;
  document.getElementById("profileGrid").innerHTML += `<img src="${img}">`;
});

// NAVIGATION
function showTab(tab){
  ["home","reels","search","profile"].forEach(id=>{
    document.getElementById(id).classList.add("hidden");
  });
  document.getElementById(tab).classList.remove("hidden");
}

// SHARE
function shareSite(){
  if(navigator.share){
    navigator.share({
      title:"Wedding Invite",
      url:window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  }
}