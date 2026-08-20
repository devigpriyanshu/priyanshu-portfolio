// ================= TYPING EFFECT =================

const typingText = document.getElementById("typing-text");

const roles = [
    "Front-End Developer",
    "Web Designer",
    "BCA Graduate"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();


// ================= ACTIVE NAVBAR =================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current =
                section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ================= MOBILE NAVBAR =================

const navbarLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

const navbarCollapse =
    document.querySelector(".navbar-collapse");

navbarLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (
            navbarCollapse.classList.contains("show")
        ) {

            const collapse =
                bootstrap.Collapse.getInstance(
                    navbarCollapse
                );

            if (collapse) {
                collapse.hide();
            }

        }

    });

});


// ================= SCROLL ANIMATION =================

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .timeline-content, .education-card, .stat-card"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const subject =
            document.getElementById("subject").value;

        const message =
            document.getElementById("message").value;


        const mailtoLink =
            `mailto:pm6597552@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                "Name: " +
                name +
                "\nEmail: " +
                email +
                "\n\nMessage:\n" +
                message
            )}`;


        window.location.href =
            mailtoLink;

    }
);