const sports = [
  {name:"NRL", icon:"🏉", priority:true, description:"League news & analysis"},
  {name:"AFL", icon:"🏟️", priority:true, description:"Footy insight & previews"},
  {name:"NFL", icon:"🏈", priority:true, description:"The American game"},
  {name:"SOCCER", icon:"⚽", description:"The global game"},
  {name:"BASKETBALL", icon:"🏀", description:"Hoops, local & global"},
  {name:"MOTORSPORT", icon:"🏎️", description:"Racing & race weekends"},
  {name:"RUGBY UNION", icon:"🏉", description:"International rugby"},
  {name:"GOLF", icon:"⛳", description:"Tours, majors & players"},
  {name:"NETBALL", icon:"🥅", description:"The netball community"},
  {name:"FANTASY", icon:"✦", description:"Rankings & strategy"}
];

const stories = [
  {sport:"NRL", title:"The key questions every fan should be asking before kick-off", desc:"A sample preview format built around form, match-ups and the moments that could shape a game.", art:"NRL / THE BREAKDOWN"},
  {sport:"AFL", title:"Where the contest could be won: the match-up watchlist", desc:"A tactical look at the contests, roles and pressure points worth following.", art:"AFL / GAME PLAN"},
  {sport:"NFL", title:"Fantasy focus: building a smarter weekly shortlist", desc:"A sample fantasy explainer showing how form, opportunity and fixtures can guide decisions.", art:"NFL / FANTASY EDGE"}
];

const sportsGrid = document.getElementById("sports-grid");
sports.forEach((sport, index) => {
  const card = document.createElement("a");
  card.className = `sport-card${sport.priority ? " priority" : ""}`;
  card.href = sport.name === "FANTASY" ? "#fantasy" : "#latest-stories";
  card.innerHTML = `<div class="sport-number">SPORT ${String(index + 1).padStart(2,"0")}</div><div class="sport-icon" aria-hidden="true">${sport.icon}</div><h3>${sport.name}</h3><p>${sport.description}</p>`;
  sportsGrid.appendChild(card);
});

const storyGrid = document.getElementById("story-grid");
stories.forEach(story => {
  const article = document.createElement("article");
  article.className = "story-card";
  article.innerHTML = `<div class="story-art"><span>${story.art}</span></div><div class="story-body"><div class="story-category">${story.sport} / EDITORIAL</div><h3>${story.title}</h3><p>${story.desc}</p></div>`;
  storyGrid.appendChild(article);
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("today-label").textContent = new Intl.DateTimeFormat("en-AU",{weekday:"short",day:"numeric",month:"short",year:"numeric"}).format(new Date());

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
  menuToggle.textContent = "☰";
}));

document.getElementById("newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("form-message");
  message.textContent = `Thanks — ${email} is entered in this local preview. Connect an email service before collecting real subscribers.`;
  document.getElementById("email").value = "";
});
