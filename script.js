/* 
  Wedding social invite demo
  ------------------------------------------
  Replace the data below with your own:
  - names
  - dates
  - locations
  - photos
  - videos
  - captions
  - QR card destinations

  Backend hook:
  - comments currently use localStorage for the demo
  - later, replace load/save/comment submit logic with API calls
*/

const DATA = {
  couple: {
    names: "Deekshitha & Prasad",
    subtitle: "A social-style invite for friends, family, and memories",
    bio: "A joyful invitation page for the engagement, wedding, and reception moments.",
    date: "11 May 2026",
    venue: "Hyderabad",
    location: "TBA Banquet Hall, Jubilee Hills",
    hashtag: "#DeekshithaWedsPrasad",
  },

  stories: [
    {
      id: 1,
      name: "Aarav",
      initials: "AR",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1529634892829-1a0b67a1f7a2?auto=format&fit=crop&w=900&q=80",
        alt: "Friend wishing at engagement",
      },
      caption: "The sparkle was unforgettable.",
    },
    {
      id: 2,
      name: "Meera",
      initials: "ME",
      media: {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
        alt: "Short engagement teaser video",
      },
      caption: "A little teaser from the celebrations.",
    },
    {
      id: 3,
      name: "Kabir",
      initials: "KB",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
        alt: "Friend photo from the event",
      },
      caption: "Wishing you both a beautiful forever.",
    },
    {
      id: 4,
      name: "Sana",
      initials: "SN",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=80",
        alt: "Celebration photo with flowers",
      },
      caption: "Moments that feel like a dream.",
    },
    {
      id: 5,
      name: "Rohan",
      initials: "RH",
      media: {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
        alt: "Wedding teaser clip",
      },
      caption: "Cheers to a lifetime of joy.",
    },
    {
      id: 6,
      name: "Isha",
      initials: "IS",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1523438097201-512ae7d59d0b?auto=format&fit=crop&w=900&q=80",
        alt: "Warm engagement portrait",
      },
      caption: "A beautiful beginning for a beautiful couple.",
    },
  ],

  posts: [
    {
      id: 1,
      name: "Aarav",
      initials: "AR",
      time: "2h ago",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
        alt: "Engagement wishes photo",
      },
      caption: "Best wishes from friends",
      baseLikes: 128,
    },
    {
      id: 2,
      name: "Meera",
      initials: "ME",
      time: "5h ago",
      media: {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1529634892829-1a0b67a1f7a2?auto=format&fit=crop&w=1200&q=80",
        alt: "Engagement teaser video",
      },
      caption: "Best wishes from friends",
      baseLikes: 94,
    },
    {
      id: 3,
      name: "Kabir",
      initials: "KB",
      time: "8h ago",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
        alt: "Warm wedding portrait",
      },
      caption: "Best wishes from friends",
      baseLikes: 151,
    },
    {
      id: 4,
      name: "Sana",
      initials: "SN",
      time: "11h ago",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
        alt: "Celebrate love with flowers",
      },
      caption: "Best wishes from friends",
      baseLikes: 203,
    },
    {
      id: 5,
      name: "Rohan",
      initials: "RH",
      time: "Yesterday",
      media: {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        alt: "Highlight video",
      },
      caption: "Best wishes from friends",
      baseLikes: 176,
    },
    {
      id: 6,
      name: "Isha",
      initials: "IS",
      time: "Yesterday",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1523438097201-512ae7d59d0b?auto=format&fit=crop&w=1200&q=80",
        alt: "Friends photo wishing the couple",
      },
      caption: "Best wishes from friends",
      baseLikes: 116,
    },
  ],

  reels: [
    {
      id: 1,
      title: "Golden hour teaser",
      subtitle: "A dreamy glimpse of the celebration lights.",
      media: {
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
      },
    },
    {
      id: 2,
      title: "Engagement highlights",
      subtitle: "Soft smiles, warm colors, and a perfect night.",
      media: {
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
      },
    },
    {
      id: 3,
      title: "Reception preview",
      subtitle: "A little sparkle before the big day.",
      media: {
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1514222709107-a180c68d72b2?auto=format&fit=crop&w=900&q=80",
      },
    },
  ],

  explore: [
    {
      id: 1,
      title: "Wedding Location",
      subtitle: "Scan to open map",
      type: "qr",
      qrText: "Wedding Location • Jubilee Hills",
    },
    {
      id: 2,
      title: "Reception Location",
      subtitle: "Scan to open venue",
      type: "qr",
      qrText: "Reception Location • Banquet Hall",
    },
    {
      id: 3,
      title: "Ceremony Moments",
      subtitle: "Photo preview",
      type: "image",
      src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=80",
      alt: "Ceremony decor",
    },
    {
      id: 4,
      title: "Couple Portrait",
      subtitle: "Portrait preview",
      type: "image",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      alt: "Couple portrait",
    },
    {
      id: 5,
      title: "Stage Decor",
      subtitle: "Design inspiration",
      type: "image",
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      alt: "Stage decor preview",
    },
    {
      id: 6,
      title: "Dress Code",
      subtitle: "Elegant festive tones",
      type: "image",
      src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      alt: "Dress code inspiration",
    },
  ],

  profile: {
    name: "Deekshitha & Prasad",
    bio: "A joyful invitation page for the engagement, wedding, and reception moments.",
    details: [
      { icon: "◆", title: "Event date", text: "11 May 2026" },
      { icon: "⌂", title: "Venue", text: "Hyderabad" },
      { icon: "♥", title: "Wedding venue", text: "TBA Banquet Hall, Jubilee Hills" },
      { icon: "✦", title: "Wedding hashtag", text: "#DeekshithaWedsPrasad" },
    ],
    moments: [
      {
        type: "image",
        title: "Engagement look",
        subtitle: "Photo",
        src: "https://images.unsplash.com/photo-1529634892829-1a0b67a1f7a2?auto=format&fit=crop&w=900&q=80",
        alt: "Engagement look",
      },
      {
        type: "video",
        title: "Walk-in teaser",
        subtitle: "Video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
        alt: "Walk-in teaser video",
      },
      {
        type: "image",
        title: "Floral decor",
        subtitle: "Photo",
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
        alt: "Floral decor",
      },
      {
        type: "video",
        title: "Reception reel",
        subtitle: "Video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
        alt: "Reception reel video",
      },
      {
        type: "image",
        title: "Warm smiles",
        subtitle: "Photo",
        src: "https://images.unsplash.com/photo-1523438097201-512ae7d59d0b?auto=format&fit=crop&w=900&q=80",
        alt: "Warm smiles",
      },
      {
        type: "image",
        title: "Golden details",
        subtitle: "Photo",
        src: "https://images.unsplash.com/photo-1514222709107-a180c68d72b2?auto=format&fit=crop&w=900&q=80",
        alt: "Golden details",
      },
    ],
  },

  suggestionChips: [
    "Wedding Location",
    "Reception Location",
    "Dress Code",
    "Timings",
    "RSVP",
    "QR Codes",
  ],
};

const STORAGE_KEYS = {
  comments: "wedding-social-comments-v1",
  likes: "wedding-social-likes-v1",
};

const el = {
  title: document.getElementById("weddingTitle"),
  subtitle: document.getElementById("weddingSubtitle"),
  profileNames: document.getElementById("profileNames"),
  profileBio: document.getElementById("profileBio"),
  storiesStrip: document.getElementById("storiesStrip"),
  feedList: document.getElementById("feedList"),
  reelsStage: document.getElementById("reelsStage"),
  exploreGrid: document.getElementById("exploreGrid"),
  suggestionChips: document.getElementById("suggestionChips"),
  searchInput: document.getElementById("searchInput"),
  detailsGrid: document.getElementById("detailsGrid"),
  momentsGrid: document.getElementById("momentsGrid"),
  shareLinkText: document.getElementById("shareLinkText"),
  copyShareLinkBtn: document.getElementById("copyShareLinkBtn"),
  copyShareLinkBtn2: document.getElementById("copyShareLinkBtn2"),
  webShareBtn: document.getElementById("webShareBtn"),
  profileShortcut: document.getElementById("profileShortcut"),
  jumpToStoriesBtn: document.getElementById("jumpToStoriesBtn"),
  openCommentsPanelBtn: document.getElementById("openCommentsPanelBtn"),
  mediaModal: document.getElementById("mediaModal"),
  mediaModalBody: document.getElementById("mediaModalBody"),
  commentsDrawer: document.getElementById("commentsDrawer"),
  commentsPanelBody: document.getElementById("commentsPanelBody"),
  toast: document.getElementById("toast"),
};

const state = {
  activeView: "home",
  searchQuery: "",
  activeSuggestion: "",
  likes: loadState(STORAGE_KEYS.likes, {}),
  comments: loadState(STORAGE_KEYS.comments, {}),
  reelObserver: null,
};

function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveState(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHTML(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function initialsFromName(name) {
  return name
    .split(" ")
    .map(part => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatTime(value) {
  return value;
}

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    el.toast.classList.remove("show");
  }, 1800);
}

function getIcon(name) {
  const icons = {
    heart: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.8 4.7c-1.7-1.9-4.5-2.1-6.4-.4L12 6.6l-2.4-2.3c-1.9-1.7-4.7-1.5-6.4.4-1.8 2-1.6 5 .4 6.8l8.4 7.6 8.4-7.6c2-1.8 2.2-4.8.4-6.8z"/>
      </svg>`,
    comment: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
      </svg>`,
    send: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 2 11 13"/>
        <path d="m22 2-7 20-4-9-9-4 20-7z"/>
      </svg>`,
    share: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 12v7a1 1 0 0 0 1 1h14"/>
        <path d="m16 6 4 6-4 6"/>
        <path d="M20 12H9"/>
      </svg>`,
    search: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7"/>
        <path d="m20 20-3.5-3.5"/>
      </svg>`,
    user: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21a8 8 0 1 0-16 0"/>
        <circle cx="12" cy="8" r="4"/>
      </svg>`,
    close: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"/>
        <path d="m6 6 12 12"/>
      </svg>`,
    copy: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="11" height="11" rx="2"/>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
      </svg>`,
    star: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <path d="m12 2 2.9 6 6.6 1-4.8 4.8 1.1 6.6L12 17.2 6.2 20.4l1.1-6.6L2.5 9l6.6-1z"/>
      </svg>`,
  };
  return icons[name] || "";
}

function getAvatarMarkup(item) {
  if (item.avatar) {
    return `<img src="${item.avatar}" alt="${escapeHTML(item.name)} avatar" loading="lazy">`;
  }
  if (item.src) {
    return `<img src="${item.src}" alt="${escapeHTML(item.alt || item.title || item.name || "preview")}" loading="lazy">`;
  }
  return `<span>${escapeHTML(item.initials || initialsFromName(item.name || "GW"))}</span>`;
}

function makeQrSvg(label, subtitle = "Scan to open") {
  const seed = [...label].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const size = 21;
  const cell = 14;
  const pad = 28;
  const w = size * cell + pad * 2;
  const h = w + 72;

  const hash = (x, y) => {
    const n = (x * 17 + y * 31 + seed * 13 + x * y * 7) % 11;
    return n <= 3;
  };

  const block = [];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const inCorner =
        ((x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13));
      if (inCorner) {
        const outer = x === 0 || x === 6 || y === 0 || y === 6 || x === 14 || x === 20 || y === 14 || y === 20;
        const inner = (x >= 2 && x <= 4 && y >= 2 && y <= 4) || (x >= 16 && x <= 18 && y >= 2 && y <= 4) || (x >= 2 && x <= 4 && y >= 16 && y <= 18);
        block.push(`<rect x="${pad + x * cell}" y="${pad + y * cell}" width="${cell}" height="${cell}" fill="${outer || inner ? "#111" : "#fff"}" rx="2"/>`);
      } else if (hash(x, y)) {
        block.push(`<rect x="${pad + x * cell}" y="${pad + y * cell}" width="${cell}" height="${cell}" fill="#111" rx="2"/>`);
      }
    }
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
      <rect width="100%" height="100%" fill="#fffaf4"/>
      <rect x="18" y="18" width="${w - 36}" height="${w - 36}" rx="28" fill="#fff" stroke="#e5d8cc"/>
      ${block.join("")}
      <rect x="18" y="${w + 8}" width="${w - 36}" height="42" rx="14" fill="#f6efe7"/>
      <text x="${w / 2}" y="${w + 35}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2c2430">${label}</text>
      <text x="${w / 2}" y="${w + 57}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#7b6f78">${subtitle}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function mediaMarkup(media, className = "") {
  const cls = className ? ` class="${className}"` : "";
  if (media.type === "video") {
    return `
      <video${cls} muted playsinline loop preload="metadata" poster="${media.poster || ""}">
        <source src="${media.src}" type="video/mp4" />
      </video>
    `;
  }

  return `<img${cls} src="${media.src}" alt="${escapeHTML(media.alt || "Wedding media")}" loading="lazy">`;
}

function getComments(postId) {
  return state.comments[String(postId)] || [];
}

function getLikes(postId) {
  return Boolean(state.likes[String(postId)]);
}

function getLikeCount(post) {
  return post.baseLikes + (getLikes(post.id) ? 1 : 0);
}

function renderStories() {
  el.storiesStrip.innerHTML = DATA.stories.map((story) => `
    <button class="story-card" type="button" data-story-id="${story.id}">
      <span class="story-ring">
        <span class="story-avatar">
          ${mediaMarkup(story.media)}
        </span>
      </span>
      <span class="story-name">${escapeHTML(story.name)}</span>
    </button>
  `).join("");
}

function renderFeed() {
  el.feedList.innerHTML = DATA.posts.map((post) => {
    const comments = getComments(post.id);
    const liked = getLikes(post.id);
    const likeCount = getLikeCount(post);

    return `
      <article class="post-card" id="post-${post.id}" data-post-id="${post.id}">
        <header class="post-head">
          <button class="post-user" type="button" data-story-id="${post.id}">
            <span class="feed-avatar">${mediaMarkup(
              {
                type: "image",
                src: `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(post.name)}&radius=50`,
                alt: `${post.name} avatar`,
              }
            )}</span>
            <span class="user-meta">
              <span class="user-name">${escapeHTML(post.name)}</span>
              <span class="user-time">${escapeHTML(post.time)}</span>
            </span>
          </button>
          <button class="icon-button" type="button" data-share-post="${post.id}">Share</button>
        </header>

        <button class="post-media-btn" type="button" data-preview-type="post" data-preview-id="${post.id}">
          <div class="media-frame">
            ${mediaMarkup(post.media)}
            <div class="media-overlay">
              <span class="media-badge">
                ${post.media.type === "video" ? "Video" : "Photo"}
              </span>
              <span class="play-pip" aria-hidden="true">${post.media.type === "video" ? "▶" : "◌"}</span>
            </div>
          </div>
        </button>

        <div class="post-actions">
          <button class="action-button like-button ${liked ? "liked" : ""}" type="button" data-like-post="${post.id}" aria-pressed="${liked}">
            ${getIcon("heart")}
            <span>${liked ? "Liked" : "Like"}</span>
          </button>
          <button class="action-button" type="button" data-focus-comment="${post.id}">
            ${getIcon("comment")}
            <span>Comment</span>
          </button>
          <button class="action-button" type="button" data-share-post="${post.id}">
            ${getIcon("send")}
            <span>Send</span>
          </button>
        </div>

        <div class="like-line">Liked by Trump and others • ${likeCount.toLocaleString()} likes</div>

        <div class="caption-row">
          <strong>${escapeHTML(post.name)}</strong>
          <span>${escapeHTML(post.caption)}</span>
        </div>

        <div class="comments-wrap">
          <div class="comments-head">
            <span>${comments.length ? `${comments.length} comment${comments.length > 1 ? "s" : ""}` : "No comments yet"}</span>
            <button class="mini-badge" type="button" data-focus-comment="${post.id}">Add a wish</button>
          </div>

          <div class="comments-list">
            ${comments.length ? comments.map(commentMarkup).join("") : `
              <div class="comment-item" style="opacity:0.85">
                <span class="comment-avatar">♡</span>
                <div class="comment-body">
                  <p class="comment-author">Be the first to leave a wish</p>
                  <p class="comment-text">Guests can comment below without logging in.</p>
                </div>
              </div>
            `}
          </div>
        </div>

        <form class="comment-form" data-comment-form="${post.id}">
          <div class="comment-form-row">
            <input type="text" name="guestName" placeholder="Guest name (optional)" maxlength="40" />
          </div>
          <textarea name="comment" placeholder="Write a wish for the couple…" maxlength="500" required></textarea>
          <button class="comment-submit" type="submit">Post comment</button>
        </form>
      </article>
    `;
  }).join("");
}

function commentMarkup(comment) {
  const initial = initialsFromName(comment.name || "Guest");
  return `
    <div class="comment-item">
      <span class="comment-avatar">${escapeHTML(initial)}</span>
      <div class="comment-body">
        <p class="comment-author">${escapeHTML(comment.name || "Guest")}</p>
        <p class="comment-text">${escapeHTML(comment.text)}</p>
        <div class="comment-time">${escapeHTML(comment.time)}</div>
      </div>
    </div>
  `;
}

function renderReels() {
  el.reelsStage.innerHTML = DATA.reels.map((reel, index) => `
    <article class="reel-card" data-reel-id="${reel.id}">
      <video
        class="reel-video"
        muted
        playsinline
        loop
        preload="metadata"
        poster="${reel.media.poster || ""}"
        ${index === 0 ? "autoplay" : ""}
      >
        <source src="${reel.media.src}" type="video/mp4" />
      </video>

      <div class="reel-overlay">
        <div class="reel-top">
          <div>
            <span class="reel-pill">${getIcon("star")} Engagement teaser</span>
            <h4 class="reel-title">${escapeHTML(reel.title)}</h4>
          </div>
          <button class="icon-button" type="button" data-preview-type="reel" data-preview-id="${reel.id}">Preview</button>
        </div>
        <p class="reel-subtitle">${escapeHTML(reel.subtitle)}</p>
      </div>
    </article>
  `).join("");
}

function renderExplore(query = "") {
  const q = query.trim().toLowerCase();

  const filtered = DATA.explore.filter((item) => {
    if (!q) return true;
    const haystack = [
      item.title,
      item.subtitle,
      item.qrText,
      item.type,
      DATA.couple.location,
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });

  el.exploreGrid.innerHTML = filtered.map((item) => {
    if (item.type === "qr") {
      return `
        <button class="explore-card" type="button" data-preview-type="qr" data-preview-id="${item.id}">
          <div class="qr-wrap">
            <img src="${makeQrSvg(item.title, item.subtitle)}" alt="${escapeHTML(item.title)} QR card" loading="lazy" />
          </div>
          <div class="explore-label">
            <h4>${escapeHTML(item.title)}</h4>
            <p>${escapeHTML(item.subtitle)}</p>
          </div>
        </button>
      `;
    }

    return `
      <button class="explore-card" type="button" data-preview-type="explore" data-preview-id="${item.id}">
        <img class="explore-photo" src="${item.src}" alt="${escapeHTML(item.alt || item.title)}" loading="lazy" />
        <div class="explore-label">
          <h4>${escapeHTML(item.title)}</h4>
          <p>${escapeHTML(item.subtitle)}</p>
        </div>
      </button>
    `;
  }).join("");

  if (!filtered.length) {
    el.exploreGrid.innerHTML = `
      <div class="details-card" style="grid-column: 1 / -1; text-align: center;">
        <div class="details-icon" style="margin: 0 auto;">⌕</div>
        <h4>No matches</h4>
        <p>Try searching wedding location, reception location, QR codes, or dress code.</p>
      </div>
    `;
  }
}

function renderSuggestionChips() {
  el.suggestionChips.innerHTML = DATA.suggestionChips.map((chip) => `
    <button class="suggestion-chip ${state.activeSuggestion === chip ? "active" : ""}" type="button" data-chip="${escapeHTML(chip)}">
      ${escapeHTML(chip)}
    </button>
  `).join("");
}

function renderDetails() {
  el.profileNames.innerHTML = DATA.couple.names.replace("&", "&amp;");
  el.profileBio.textContent = DATA.profile.bio;
  el.title.textContent = DATA.couple.names;
  el.subtitle.textContent = DATA.couple.subtitle;

  el.shareLinkText.textContent = window.location.href;

  el.detailsGrid.innerHTML = DATA.profile.details.map((detail) => `
    <article class="details-card">
      <div class="details-icon">${escapeHTML(detail.icon)}</div>
      <h4>${escapeHTML(detail.title)}</h4>
      <p>${escapeHTML(detail.text)}</p>
    </article>
  `).join("");

  el.momentsGrid.innerHTML = DATA.profile.moments.map((moment, index) => `
    <button class="moment-card" type="button" data-preview-type="moment" data-preview-id="${index}">
      <div class="moment-media">
        ${
          moment.type === "video"
            ? `<video muted playsinline loop preload="metadata" poster="${moment.poster || ""}"><source src="${moment.src}" type="video/mp4" /></video>`
            : `<img src="${moment.src}" alt="${escapeHTML(moment.alt || moment.title)}" loading="lazy">`
        }
      </div>
      <div class="moment-play">${moment.type === "video" ? "▶" : "✦"}</div>
      <div class="moment-label">
        <h4>${escapeHTML(moment.title)}</h4>
        <p>${escapeHTML(moment.subtitle)}</p>
      </div>
    </button>
  `).join("");
}

function renderCommentsPanel() {
  const all = DATA.posts
    .map((post) => ({
      post,
      comments: getComments(post.id),
    }))
    .filter((group) => group.comments.length > 0);

  if (!all.length) {
    el.commentsPanelBody.innerHTML = `
      <div class="comment-group">
        <h4>No comments yet</h4>
        <p>Guest wishes will appear here as soon as someone posts them.</p>
      </div>
    `;
    return;
  }

  el.commentsPanelBody.innerHTML = all.map(({ post, comments }) => `
    <section class="comment-group">
      <div class="comment-group-head">
        <div>
          <h4>${escapeHTML(post.name)}’s post</h4>
          <p>${comments.length} comment${comments.length > 1 ? "s" : ""}</p>
        </div>
        <span class="mini-badge">${escapeHTML(post.caption)}</span>
      </div>
      <div class="comments-list">
        ${comments.map(commentMarkup).join("")}
      </div>
    </section>
  `).join("");
}

function openModal() {
  el.mediaModal.classList.add("open");
  el.mediaModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  el.mediaModal.classList.remove("open");
  el.mediaModal.setAttribute("aria-hidden", "true");
  el.mediaModalBody.innerHTML = "";
  document.body.classList.remove("modal-open");
}

function openCommentsDrawer() {
  renderCommentsPanel();
  el.commentsDrawer.classList.add("open");
  el.commentsDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCommentsDrawer() {
  el.commentsDrawer.classList.remove("open");
  el.commentsDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function mediaForStory(story) {
  return `
    <div class="modal-body">
      <div class="story-progress"><span></span></div>
      <div class="preview-hero">
        <p class="eyebrow">Story</p>
        <h3 class="preview-title">${escapeHTML(story.name)}</h3>
        <p class="preview-subtitle">${escapeHTML(story.caption)}</p>
      </div>
      <div class="preview-media">
        ${mediaMarkup(story.media)}
      </div>
    </div>
  `;
}

function mediaForPost(post) {
  return `
    <div class="modal-body">
      <div class="preview-hero">
        <p class="eyebrow">Post preview</p>
        <h3 class="preview-title">${escapeHTML(post.name)}</h3>
        <p class="preview-subtitle">${escapeHTML(post.caption)}</p>
      </div>
      <div class="preview-media">
        ${mediaMarkup(post.media)}
      </div>
      <p class="preview-subtitle">Best wishes from friends • ${getLikeCount(post).toLocaleString()} likes</p>
    </div>
  `;
}

function mediaForReel(reel) {
  return `
    <div class="modal-body">
      <div class="preview-hero">
        <p class="eyebrow">Reel</p>
        <h3 class="preview-title">${escapeHTML(reel.title)}</h3>
        <p class="preview-subtitle">${escapeHTML(reel.subtitle)}</p>
      </div>
      <div class="preview-media">
        <video muted playsinline loop autoplay poster="${reel.media.poster || ""}">
          <source src="${reel.media.src}" type="video/mp4" />
        </video>
      </div>
    </div>
  `;
}

function mediaForExplore(item) {
  const body = item.type === "qr"
    ? `<img src="${makeQrSvg(item.title, item.subtitle)}" alt="${escapeHTML(item.title)} QR card" loading="lazy" />`
    : `<img src="${item.src}" alt="${escapeHTML(item.alt || item.title)}" loading="lazy" />`;

  return `
    <div class="modal-body">
      <div class="preview-hero">
        <p class="eyebrow">Explore</p>
        <h3 class="preview-title">${escapeHTML(item.title)}</h3>
        <p class="preview-subtitle">${escapeHTML(item.subtitle)}</p>
      </div>
      <div class="preview-media">
        ${body}
      </div>
    </div>
  `;
}

function mediaForMoment(moment) {
  const body = moment.type === "video"
    ? `<video muted playsinline loop autoplay poster="${moment.poster || ""}"><source src="${moment.src}" type="video/mp4" /></video>`
    : `<img src="${moment.src}" alt="${escapeHTML(moment.alt || moment.title)}" loading="lazy" />`;

  return `
    <div class="modal-body">
      <div class="preview-hero">
        <p class="eyebrow">Moments</p>
        <h3 class="preview-title">${escapeHTML(moment.title)}</h3>
        <p class="preview-subtitle">${escapeHTML(moment.subtitle)}</p>
      </div>
      <div class="preview-media">
        ${body}
      </div>
    </div>
  `;
}

function openMediaPreview(contentHTML) {
  el.mediaModalBody.innerHTML = contentHTML;
  openModal();
}

function previewByType(type, id) {
  if (type === "story") {
    const story = DATA.stories.find((item) => String(item.id) === String(id));
    if (story) openMediaPreview(mediaForStory(story));
    return;
  }

  if (type === "post") {
    const post = DATA.posts.find((item) => String(item.id) === String(id));
    if (post) openMediaPreview(mediaForPost(post));
    return;
  }

  if (type === "reel") {
    const reel = DATA.reels.find((item) => String(item.id) === String(id));
    if (reel) openMediaPreview(mediaForReel(reel));
    return;
  }

  if (type === "qr" || type === "explore") {
    const item = DATA.explore.find((entry) => String(entry.id) === String(id));
    if (item) openMediaPreview(mediaForExplore(item));
    return;
  }

  if (type === "moment") {
    const moment = DATA.profile.moments[Number(id)];
    if (moment) openMediaPreview(mediaForMoment(moment));
  }
}

function switchView(viewName) {
  state.activeView = viewName;

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.dataset.view === viewName);
  });

  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.nav === viewName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (viewName === "reels") {
    setTimeout(() => {
      setupReelsObserver();
      playVisibleReel();
    }, 50);
  } else {
    pauseAllReels();
  }
}

function setupReelsObserver() {
  if (!el.reelsStage) return;

  if (state.reelObserver) {
    state.reelObserver.disconnect();
  }

  const videos = el.reelsStage.querySelectorAll("video");

  state.reelObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector("video");
      if (!video) return;

      if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, {
    root: el.reelsStage,
    threshold: [0.25, 0.5, 0.75, 1],
  });

  el.reelsStage.querySelectorAll(".reel-card").forEach((card) => state.reelObserver.observe(card));

  videos.forEach((video, index) => {
    if (index === 0) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}

function playVisibleReel() {
  const cards = Array.from(el.reelsStage.querySelectorAll(".reel-card"));
  const stageRect = el.reelsStage.getBoundingClientRect();
  let best = null;
  let bestScore = 0;

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const visible = Math.min(rect.bottom, stageRect.bottom) - Math.max(rect.top, stageRect.top);
    const score = visible / rect.height;
    if (score > bestScore) {
      bestScore = score;
      best = card;
    }
  });

  if (best) {
    cards.forEach((card) => {
      const video = card.querySelector("video");
      if (!video) return;
      if (card === best) video.play().catch(() => {});
      else video.pause();
    });
  }
}

function pauseAllReels() {
  document.querySelectorAll("#reelsStage video").forEach((video) => video.pause());
}

function submitComment(form) {
  const postId = String(form.dataset.commentForm);
  const fd = new FormData(form);
  const guestName = String(fd.get("guestName") || "").trim() || "Guest";
  const commentText = String(fd.get("comment") || "").trim();

  if (!commentText) return;

  const entry = {
    name: guestName,
    text: commentText,
    time: new Date().toLocaleString([], { dateStyle: "medium", timeStyle: "short" }),
  };

  const list = state.comments[postId] || [];
  list.push(entry);
  state.comments[postId] = list;
  saveState(STORAGE_KEYS.comments, state.comments);

  renderFeed();
  renderCommentsPanel();
  showToast("Comment posted");
}

async function sharePage(url, title = DATA.couple.names, text = DATA.couple.subtitle) {
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url });
      showToast("Shared successfully");
      return;
    }
  } catch {
    // fall through to clipboard
  }

  try {
    await navigator.clipboard.writeText(url);
    showToast("Link copied");
  } catch {
    showToast("Copy failed");
  }
}

async function sharePost(post) {
  const shareUrl = `${window.location.href.split("#")[0]}#post-${post.id}`;
  const text = `${post.name}: ${post.caption}`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: DATA.couple.names,
        text,
        url: shareUrl,
      });
      return;
    }
  } catch {
    // ignore and fallback
  }

  try {
    await navigator.clipboard.writeText(shareUrl);
    showToast("Post link copied");
  } catch {
    showToast("Unable to copy");
  }
}

function toggleLike(postId) {
  const key = String(postId);
  state.likes[key] = !state.likes[key];
  saveState(STORAGE_KEYS.likes, state.likes);

  renderFeed();
  const btn = document.querySelector(`[data-like-post="${CSS.escape(key)}"]`);
  if (btn) {
    btn.classList.add("pop");
    setTimeout(() => btn.classList.remove("pop"), 260);
  }
}

function focusCommentForm(postId) {
  const form = document.querySelector(`[data-comment-form="${CSS.escape(String(postId))}"]`);
  if (!form) return;
  const input = form.querySelector('textarea[name="comment"]');
  if (input) input.focus({ preventScroll: false });
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function init() {
  renderStories();
  renderFeed();
  renderReels();
  renderSuggestionChips();
  renderExplore();
  renderDetails();
  renderCommentsPanel();

  el.shareLinkText.textContent = window.location.href;

  setupReelsObserver();

  document.querySelectorAll("[data-nav]").forEach((btn) => {
    btn.addEventListener("click", () => switchView(btn.dataset.nav));
  });

  el.profileShortcut.addEventListener("click", () => switchView("profile"));
  el.jumpToStoriesBtn.addEventListener("click", () => switchView("home"));
  el.openCommentsPanelBtn.addEventListener("click", openCommentsDrawer);

  el.searchInput.addEventListener("input", () => {
    state.searchQuery = el.searchInput.value;
    renderExplore(state.searchQuery);
  });

  el.suggestionChips.addEventListener("click", (event) => {
    const chipBtn = event.target.closest("[data-chip]");
    if (!chipBtn) return;

    state.activeSuggestion = chipBtn.dataset.chip;
    el.searchInput.value = state.activeSuggestion;
    renderSuggestionChips();
    renderExplore(state.activeSuggestion);
    el.searchInput.focus();
  });

  el.storiesStrip.addEventListener("click", (event) => {
    const card = event.target.closest("[data-story-id]");
    if (!card) return;
    previewByType("story", card.dataset.storyId);
  });

  el.feedList.addEventListener("click", (event) => {
    const likeBtn = event.target.closest("[data-like-post]");
    if (likeBtn) {
      toggleLike(likeBtn.dataset.likePost);
      return;
    }

    const shareBtn = event.target.closest("[data-share-post]");
    if (shareBtn) {
      const post = DATA.posts.find((p) => String(p.id) === String(shareBtn.dataset.sharePost));
      if (post) sharePost(post);
      return;
    }

    const focusBtn = event.target.closest("[data-focus-comment]");
    if (focusBtn) {
      focusCommentForm(focusBtn.dataset.focusComment);
      return;
    }

    const previewBtn = event.target.closest("[data-preview-type]");
    if (previewBtn) {
      previewByType(previewBtn.dataset.previewType, previewBtn.dataset.previewId);
    }
  });

  el.feedList.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-comment-form]");
    if (!form) return;
    event.preventDefault();
    submitComment(form);
  });

  el.reelsStage.addEventListener("scroll", () => {
    if (state.activeView === "reels") {
      window.requestAnimationFrame(playVisibleReel);
    }
  }, { passive: true });

  el.reelsStage.addEventListener("click", (event) => {
    const previewBtn = event.target.closest("[data-preview-type]");
    if (!previewBtn) return;
    previewByType(previewBtn.dataset.previewType, previewBtn.dataset.previewId);
  });

  el.exploreGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-preview-type]");
    if (!card) return;
    previewByType(card.dataset.previewType, card.dataset.previewId);
  });

  el.momentsGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-preview-type]");
    if (!card) return;
    previewByType(card.dataset.previewType, card.dataset.previewId);
  });

  el.webShareBtn.addEventListener("click", () => {
    sharePage(window.location.href);
  });
  el.copyShareLinkBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copied");
    } catch {
      showToast("Copy failed");
    }
  });
  el.copyShareLinkBtn2.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copied");
    } catch {
      showToast("Copy failed");
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) {
      closeModal();
    }
    if (event.target.matches("[data-close-comments]")) {
      closeCommentsDrawer();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeCommentsDrawer();
    }
  });

  el.mediaModal.addEventListener("click", (event) => {
    if (event.target === el.mediaModal) closeModal();
  });

  el.commentsDrawer.addEventListener("click", (event) => {
    if (event.target === el.commentsDrawer) closeCommentsDrawer();
  });

  window.addEventListener("resize", () => {
    if (state.activeView === "reels") playVisibleReel();
  });

  switchView("home");
}

init();