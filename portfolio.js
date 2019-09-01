// variables for nav elements
var navProjects = document.getElementById("nav-projects");
var navConnect = document.getElementById("nav-connect");
var navAbout = document.getElementById("nav-about");

// variables for section elements
var projects = document.getElementById("projects");
var connect = document.getElementById("connect");
var about = document.getElementById("about");

// click event listener for nav elements
navProjects.addEventListener("click", showProjects);
navConnect.addEventListener("click", showConnect);
navAbout.addEventListener("click", showAbout);

// hides sections and makes nav links their default color
function hideSections() {
    navProjects.classList.remove("selected");
    navConnect.classList.remove("selected");
    navAbout.classList.remove("selected");
    projects.style.display = "none";
    connect.style.display = "none";
    about.style.display = "none";
}

// shows projects and highlights corresponding nav link
function showProjects() {
    hideSections();
    navProjects.classList.add("selected");
    projects.style.display = "block";
}
// shows certificates and highlights corresponding nav link
function showConnect() {
    hideSections();
    navConnect.classList.add("selected");
    connect.style.display = "block";
}
// shows about me info and highlights corresponding nav link
function showAbout() {
    hideSections();
    navAbout.classList.add("selected");
    about.style.display = "block";
}
