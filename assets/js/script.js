
const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const ul = document.getElementById("nav-ul");

openMenuButton.addEventListener("click", () => {
    closeMenuButton.style.visibility = "visible";
    ul.style.display = "block";
    closeMenuButton.style.display = "block";
    openMenuButton.style.display = "none";
});

closeMenuButton.addEventListener("click", () => {
    ul.style.display = "none";
    closeMenuButton.style.display = "none";
    openMenuButton.style.display = "block";
});

// ---------------------------------------------------------------------------- //

const sumbitButton = document.getElementById("submit");

sumbitButton.addEventListener("click", () => {
    Swal.fire('Success!', 'Your feedback sent to author', 'succss');
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