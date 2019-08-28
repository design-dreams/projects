// variables for nav elements
var navProjects = document.getElementById("nav-projects");
var navCerts = document.getElementById("nav-certs");
var navAbout = document.getElementById("nav-about");

// variables for section elements
var projects = document.getElementById("projects");
var certs = document.getElementById("certs");
var about = document.getElementById("about");

// click event listener for nav elements
navProjects.addEventListener("click", showProjects);
navCerts.addEventListener("click", showCerts);
navAbout.addEventListener("click", showAbout);

// hides sections and makes nav links their default color
function hideSections() {
    navProjects.classList.remove("selected");
    navCerts.classList.remove("selected");
    navAbout.classList.remove("selected");
    projects.style.display = "none";
    certs.style.display = "none";
    about.style.display = "none";
}

// shows projects and highlights corresponding nav link
function showProjects() {
    hideSections();
    navProjects.classList.add("selected");
    projects.style.display = "block";
}
// shows certificates and highlights corresponding nav link
function showCerts() {
    hideSections();
    navCerts.classList.add("selected");
    certs.style.display = "block";
}
// shows about me info and highlights corresponding nav link
function showAbout() {
    hideSections();
    navAbout.classList.add("selected");
    about.style.display = "block";
}
