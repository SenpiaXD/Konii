// Mobile Functionality: Responsive Navbar

document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuButton = document.getElementById("toggle-menu");
    const navUl = document.getElementById("nav-ul");

    toggleMenuButton.addEventListener("click", function () {
        
        navUl.classList.toggle("show");
        toggleMenuButton.classList.toggle("active");
    });
});

// Mobile Functionality: Responsive Navbar
const listView = document.getElementById("nav-ul");

listView.addEventListener("click", () => {
    listView.classList.toggle("show");
});

// BACKTOTOP
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    const backButton = document.querySelector('.back-to-Top');
    if (window.scrollY > 0) {
        backButton.style.display = 'block';
    } else {
        backButton.style.display = 'none';
    }
});

// TypeWritter
var i = 0;
var txt1 = "Hi, I am Argie P. Delgado";
const speed = 75;

function Write() {
    if(i < txt1.length) {
        document.getElementById("typer").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(Write, speed);
    }
}

var e = 0;
var txt2 = "I'm a web developer and app developer.";
const speed2 = 75;

function Write2() {
    if(e < txt2.length) {
        document.getElementById("typer2").innerHTML += txt2.charAt(e);
        e++;
        setTimeout(Write2, speed2);
    }
}

window.onload = function () {
    Write();
    Write2();
}