// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
});

// Typing Effect
const texts = ["Software Developer", "ML Enthusiast", "Python Developer", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = '';
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const typingElement = document.querySelector(".typing");
    if(!typingElement) return;
    
    if (count === texts.length) count = 0;
    currentText = texts[count];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, index - 1);
        index--;
        typingSpeed = 50; 
    } else {
        typingElement.textContent = currentText.substring(0, index + 1);
        index++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && index === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        count++;
        typingSpeed = 500;
    }
    setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});

// Custom Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

if(cursorDot && cursorOutline && window.innerWidth > 768) {
    window.addEventListener("mousemove", function(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // animate outline with slight delay for smooth effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effect on links and buttons
    const hoverElements = document.querySelectorAll("a, .btn, .premium-card, .skill-modern-card");
    hoverElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursorOutline.style.width = "60px";
            cursorOutline.style.height = "60px";
            cursorOutline.style.backgroundColor = "rgba(96, 165, 250, 0.1)";
        });
        el.addEventListener("mouseleave", () => {
            cursorOutline.style.width = "40px";
            cursorOutline.style.height = "40px";
            cursorOutline.style.backgroundColor = "transparent";
        });
    });
}

// Particles JS setup (More subtle, deep space feel)
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 1000 } },
            color: { value: ["#3b82f6", "#8b5cf6", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { 
                value: 0.4, 
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: { 
                value: 5, 
                random: true,
                anim: { enable: true, speed: 3, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 160,
                color: "#475569",
                opacity: 0.3,
                width: 1.5
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "bubble" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                bubble: { distance: 250, size: 6, duration: 2, opacity: 0.8, speed: 3 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
}

// Premium Card Spotlight & Parallax Blobs
const bgBlob1 = document.querySelector('.bg-blob-1');
const bgBlob2 = document.querySelector('.bg-blob-2');
const bgBlob3 = document.querySelector('.bg-blob-3');

document.addEventListener('mousemove', e => {
    // Parallax Blobs
    if (window.innerWidth > 768) {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        
        if(bgBlob1) { bgBlob1.style.marginLeft = `${x * 120}px`; bgBlob1.style.marginTop = `${y * 120}px`; }
        if(bgBlob2) { bgBlob2.style.marginLeft = `${x * -100}px`; bgBlob2.style.marginTop = `${y * -100}px`; }
        if(bgBlob3) { bgBlob3.style.marginLeft = `${x * 150}px`; bgBlob3.style.marginTop = `${y * 150}px`; }
    }
});

const premiumCards = document.querySelectorAll('.premium-card');
premiumCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});