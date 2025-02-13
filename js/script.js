document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".notto-navbar a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 50) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => link.classList.remove("active"));

        if (current) {
            document.querySelector(`.notto-navbar a[href="#${current}"]`)?.classList.add("active");
        }
    });
});

  