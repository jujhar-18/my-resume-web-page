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

window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("h2");

    for (let i = 0; i < sections.length; i++) {
        let position = sections[i].getBoundingClientRect().top;

        if (position < window.innerHeight - 50) {
            sections[i].classList.add("show");
        }
    }

    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / height) * 100;

    document.getElementById("progress").style.width = scrolled + "%";
});