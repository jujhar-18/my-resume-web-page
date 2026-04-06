// Smooth scroll navigation
let navLinks = document.querySelectorAll(".navbar a");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (e) {
        let href = this.getAttribute("href");
        if (href.startsWith("#")) {
            e.preventDefault();
            let target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
}

// Scroll animations for sections
window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("h2");

    for (let i = 0; i < sections.length; i++) {
        let position = sections[i].getBoundingClientRect().top;

        if (position < window.innerHeight - 50) {
            sections[i].classList.add("show");
        }
    }

    // Progress bar animation
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / height) * 100;

    let progressBar = document.getElementById("progress");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
});

// Container fade-in animation on page load
window.addEventListener("load", function () {
    let container = document.querySelector(".container");
    if (container) {
        container.style.animation = "fadeIn 0.8s ease";
    }
});

// Add pulse effect to navbar on page load
let navbar = document.querySelector(".navbar");
if (navbar) {
    navbar.style.animation = "slideInDown 0.6s ease";
}