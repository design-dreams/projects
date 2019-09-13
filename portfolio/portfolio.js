// variables for nav elements
var navProjects = document.getElementById("nav-projects");
var navConnect = document.getElementById("nav-connect");
var navAbout = document.getElementById("nav-about");
var navBar = document.getElementById("navbar");

// variables for section elements
var projects = document.getElementById("projects");
var connect = document.getElementById("connect");
var about = document.getElementById("about");

// click event listener for nav elements
navBar.addEventListener("click", moveHeader);
navProjects.addEventListener("click", showProjects);
navConnect.addEventListener("click", showConnect);
navAbout.addEventListener("click", showAbout);

// hides main content and makes nav links their default color
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
// shows how to connect and highlights corresponding nav link
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
// moves header up when nav link is clicked
function moveHeader() {
    var move = document.getElementsByTagName("header").item(0);
    var n = 200;
    var id = setInterval(frame, 1);
    function frame() {
        if (n == 0) {
            clearInterval(id);
        } else {
            n--;
            move.style.paddingTop = n + "px";
        }
    }
    navBar.removeEventListener("click", moveHeader);
}