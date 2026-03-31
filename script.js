// Navigation
function goTo(page) {
  window.location.href = page;
}

// Login system
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "admin.html";
  } else {
    alert("Wrong credentials");
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedIn");
  alert("Logged out");
}

// Check admin access
if (window.location.pathname.includes("admin.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("Access denied!");
    window.location.href = "login.html";
  }
}

// Add news
function addNews() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  let news = JSON.parse(localStorage.getItem("news")) || [];

  news.push({ title, content });

  localStorage.setItem("news", JSON.stringify(news));

  alert("News added!");
}

// Load news on homepage
if (document.getElementById("news-container")) {
  let news = JSON.parse(localStorage.getItem("news")) || [];
  const container = document.getElementById("news-container");

  news.reverse().forEach(item => {
    const div = document.createElement("div");
    div.className = "news-card";
    div.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
    container.appendChild(div);
  });
}
