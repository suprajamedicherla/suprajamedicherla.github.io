// SCROLL REVEAL ANIMATION
const fadeUpElements = document.querySelectorAll(".fade-up");

function revealOnScroll() {
    fadeUpElements.forEach((el) => {
        const rect = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (rect < windowHeight - 50) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetID = this.getAttribute("href");
        const targetSection = document.querySelector(targetID);

        if (targetSection) {
            const offset = targetSection.offsetTop - 60; // adjust for navbar
            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        }
    });
});



// OPTIONAL: LIGHT HOVER FLOAT EFFECT FOR BLOB IMAGE
const blobImage = document.querySelector(".blob-image");

if (blobImage) {
    blobImage.addEventListener("mouseover", () => {
        blobImage.style.transform = "scale(1.03)";
    });

    blobImage.addEventListener("mouseout", () => {
        blobImage.style.transform = "scale(1)";
    });
}



// OPTIONAL: CHANGE NAVBAR STYLE ON SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(243, 238, 231, 0.95)";
        navbar.style.backdropFilter = "blur(8px)";
    } else {
        navbar.style.background = "rgba(243, 238, 231, 0.8)";
        navbar.style.backdropFilter = "blur(6px)";
    }
});
