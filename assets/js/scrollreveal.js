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
    easing: "ease-in-out"
});

ScrollReveal().reveal(".flip", {
    delay: 500,
    duration: 2000,
    rotate: {
        x: 20,
        z: 20
    }
});

ScrollReveal().reveal(".slide-left", {
    duration: 3000,
    origin: "right",
    distance: "50px",
    easing: "ease-in-out"
});