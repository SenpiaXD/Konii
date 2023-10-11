//Revealing Animation when the user scrolls/open/refresh
ScrollReveal({ reset: true });


ScrollReveal().reveal(".fade-in", {
    duration: 2500,
    move: 0
});

ScrollReveal().reveal(".show-once", {
    reset: false
});

ScrollReveal().reveal(".slide-up", {
    duration: 1000,
    origin: "bottom",
    distance: "100px",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.3,
    scale: 0.5
});