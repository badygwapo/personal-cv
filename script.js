/* ==============================================
   SCROLL REVEAL
============================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ==============================================
   NAVBAR SCROLL EFFECT
============================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ==============================================
   MOBILE MENU
============================================== */

const menuButton = document.querySelector(".menu-button");

const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


/* ==============================================
   TYPEWRITER
============================================== */

const roles = [

    "Web Developer",

    "Full-Stack Developer",

    "IT Student",

    "UI Enthusiast",

    "Problem Solver"

];


const typingText = document.getElementById("typing-text");


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeRole() {

    const currentRole = roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeRole,
                1600
            );

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1)
                %
                roles.length;

        }

    }


    const speed =
        deleting
            ? 45
            : 85;


    setTimeout(
        typeRole,
        speed
    );

}


setTimeout(
    typeRole,
    1000
);


/* ==============================================
   MOUSE GLOW
============================================== */

const mouseGlow =
    document.querySelector(".mouse-glow");


window.addEventListener(
    "mousemove",
    (event) => {

        mouseGlow.style.left =
            `${event.clientX}px`;

        mouseGlow.style.top =
            `${event.clientY}px`;

    }
);


/* ==============================================
   PROJECT CARD TILT
============================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY)
                / 70;


            const rotateY =
                (centerX - x)
                / 70;


            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-6px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                `
                perspective(1000px)
                rotateX(0)
                rotateY(0)
                translateY(0)
                `;

        }
    );

});


/* ==============================================
   CURRENT YEAR
============================================== */

document.getElementById(
    "current-year"
).textContent =
    new Date().getFullYear();