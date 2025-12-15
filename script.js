// SCROLL REVEAL ANIMATIONS
const revealElements = document.querySelectorAll(".fade-up, .slide-in");

// Reveal elements when scrolling
function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add("visible");
        }
    });
}

// Trigger on scroll
window.addEventListener("scroll", revealOnScroll);

// Trigger on page load
revealOnScroll();



// NAVBAR BACKGROUND CHANGE ON SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});



// OPTIONAL: SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetID = this.getAttribute("href");
        const targetEl = document.querySelector(targetID);

        if (targetEl) {
            window.scrollTo({
                top: targetEl.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});



// OPTIONAL: FLOATING EFFECT INTENSITY CHANGE ON SCROLL
const profilePic = document.querySelector(".profile-pic");

window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY / 20;
    profilePic.style.transform = `translateY(${Math.sin(scrollValue) * 10}px)`;
});
