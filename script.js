// Translations
import { translations } from "./translation.js";

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

// Language Toggle
const langToggle = document.getElementById("lang-toggle");
let currentLang = "ar";

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  updateLanguage();
});

function updateLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  langToggle.innerHTML =
    currentLang === "ar"
      ? '<i class="fas fa-globe"></i> EN'
      : '<i class="fas fa-globe"></i> AR';

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[currentLang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[currentLang][key];
      } else {
        element.textContent = translations[currentLang][key];
      }
    }
  });
}

// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Close mobile menu on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Scroll Reveal Animation
const sections = document.querySelectorAll(".section");

const revealSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.8s ease-out";
  sectionObserver.observe(section);
});

let images = [];
let currentIndex = 0;

function openGallery(imgArray) {
  images = imgArray;
  currentIndex = 0;
  document.getElementById("galleryModal").style.display = "block";
  showImage();
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}

function showImage() {
  document.getElementById("galleryImage").src = images[currentIndex];
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  showImage();
}

(function () {
  emailjs.init("V-nafoBlf5KdEBWYu"); // من EmailJS
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs
        .sendForm("service_lfwdyuu", "template_56odg39", "#contact-form")
        .then(
          function () {
            alert(
              currentLang === "ar"
                ? "شكراً لتواصلك! سيتم الرد عليك قريباً."
                : "Thank you for contacting! We will get back to you soon.",
            );
            contactForm.reset();
          },
          function (error) {
            console.log("Error details:", error);
            alert(
              currentLang === "ar"
                ? "حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً ❌"
                : "An error occurred while sending, please try again later ❌",
            );
          },
        );
    });
  });

  const button = document.getElementById("whatsappBtn");

    button.addEventListener("click", function(e){

      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = button.getBoundingClientRect();

      const size = Math.max(rect.width, rect.height);

      ripple.style.width = ripple.style.height = size + "px";

      ripple.style.left =
        e.clientX - rect.left - size / 2 + "px";

      ripple.style.top =
        e.clientY - rect.top - size / 2 + "px";

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);

    });