// Translations
const translations = {
  ar: {
    "nav-home": "الرئيسية",
    "nav-about": "من أنا",
    "nav-skills": "المهارات",
    "nav-projects": "المشاريع",
    "nav-contact": "اتصل بي",
    "hero-welcome": "مرحباً بك، أنا",
    "hero-name": "زياد الحريشي",
    "hero-title": "مهندس تكنولوجيا معلومات",
    "hero-desc":
      "خريج هندسة تكنولوجيا معلومات يشغف لتطوير البرمجيات وتحليل البيانات. أسعى لبناء حلول تقنية مبتكرة.",
    "btn-contact": "تواصل معي",
    "btn-cv": "تحميل السيرة الذاتية الإنجليزية",
    "btn-cv2": "تحميل السيرة الذاتية عربي/انجليزي",
    "about-title": "من أنا",
    "about-intro":
      "أنا مهندس تقنية معلومات أمتلك أساسًا قويًا في علوم الحاسوب، مع خبرة عملية في تطوير التطبيقات، تحليل البيانات، وإدارة الأنظمة، وأجمع بين الفهم النظري والتطبيقي لبناء حلول تقنية متكاملة وقابلة للتوسع.",
    "about-algorithms":
      "🧠 أمتلك خبرة في الخوارزميات وهياكل البيانات، بما يشمل البحث (Binary Search)، الفرز (Sorting)، وتحليل التعقيد الزمني، إضافة إلى التعامل مع المصفوفات، القوائم، الأشجار، والطوابير بكفاءة عالية.",
    "about-software-eng":
      "🏗️ في مجال هندسة البرمجيات، أطبق مبادئ Clean Code، وأعمل على إعادة هيكلة الأنظمة (Refactoring)، مع استخدام أنماط التصميم، وتنظيم المشاريع إلى مكونات قابلة لإعادة الاستخدام.",
    "about-flutter":
      "📱 أمتلك خبرة قوية في تطوير التطبيقات باستخدام Flutter، حيث قمت ببناء تطبيق متكامل لحجز الملاعب يتضمن واجهات احترافية، دعم الوضع الليلي، تعدد اللغات، إدارة متقدمة للحالة، وتصميم أنظمة للحجوزات والإشعارات وتجربة مستخدم تفاعلية.",
    "about-web":
      "🌐 كما لدي خبرة في تطوير الويب باستخدام HTML و CSS و JavaScript، مع القدرة على إنشاء مواقع Portfolio احترافية، دعم تعدد اللغات، التعامل مع النماذج (Forms) وربطها بالخدمات مثل EmailJS، وحل مشاكل النشر والمسارات.",
    "about-db":
      "🗄️ في مجال قواعد البيانات، أمتلك معرفة قوية بـ SQL من حيث تصميم الجداول، بناء العلاقات، وكتابة الاستعلامات بكفاءة.",
    "about-python":
      "🐍 أجيد البرمجة بلغة Python، وأستخدمها في حل المشكلات الخوارزمية، وتحليل البيانات، وفهم تدفق تنفيذ البرامج (Execution Flow) بشكل دقيق.",
    "about-linux":
      "💻 أمتلك أيضًا معرفة بأساسيات أنظمة Linux، وأتعامل مع سطر الأوامر (CLI) لإدارة الملفات والبيئة التشغيلية.",
    "about-networking":
      "🌐 في جانب الشبكات وتقنية المعلومات، لدي فهم لنماذج OSI و TCP/IP، والبروتوكولات مثل HTTP و DNS و DHCP، إضافة إلى التعامل مع عناوين IP و Subnetting، وإعداد الشبكات المحلية (LAN)، واستكشاف الأخطاء وإصلاحها باستخدام أدوات مثل ping و traceroute، مع معرفة بأساسيات أمن المعلومات والدعم الفني.",
    "about-data-analysis":
      "📊 في تحليل البيانات أستخدم Excel بشكل متقدم، وأقوم بأتمتة المهام باستخدام VBA، وإنشاء لوحات معلومات تفاعلية باستخدام Power BI لعرض البيانات بشكل احترافي.",
    "about-conclusion":
      "🎯 أمتاز بسرعة كتابة عالية، وقدرة على التعلم السريع، وتحليل المشكلات، والعمل على مشاريع حقيقية من الفكرة إلى التنفيذ، مما يجعلني مؤهلاً للعمل في مجالات تطوير التطبيقات، تطوير الويب، تحليل البيانات، أو وظائف تقنية المعلومات والدعم الفني.",
    "info-edu-label": "👨‍🎓 التعليم:",
    "info-edu-val":
      "بكالوريوس هندسة تكنولوجيا معلومات - كلية الهندسة - جامعة عدن",
    "info-lang-label": "📖 اللغات:",
    "info-lang-val": "العربية (الأم)، الإنجليزية (متوسط)",
    "skills-title": "المهارات التقنية",
    "skill-desc-1": "تطوير التطبيقات والبرمجة الخلفية",
    "skill-desc-2": "بناء واجهات لتطبيقات موبايل متكاملة",
    "skill-desc-3": "تصميم واجهات الويب باستخدام HTML/CSS/JS",
    "skill-desc-4": "التعامل مع SQL و NoSQL",
    "skill-desc-5": "أساسيات الشبكات والراوتينج",
    "skill-desc-6": "تحليل البيانات باستخدام Power BI و Excel Advance",
    "projects-title": "المشاريع",
    "proj-1-title": "لعبة الثعبان",
    "proj-1-desc":
      "تصميم وبرمجة موقع ويب متجاوب باستخدام التقنيات الأساسية لعرض الخدمات التقنية",
    "proj-2-title": "لوحة تحكم تفاعلية",
    "proj-2-desc":
      "تصميم وبرمجة موقع ويب متجاوب باستخدام التقنيات الأساسية لعرض الخدمات التقنية",
    "proj-3-title": "صفحة تفاعلية مع الحركة من اعلى لاسفل والعكس",
    "proj-3-desc":
      "تصميم وبرمجة موقع ويب متجاوب باستخدام التقنيات الأساسية لعرض الخدمات التقنية",
    "proj-4-title": "واجهة لعرض الوان هواتف ابل",
    "proj-4-desc":
      "تصميم وبرمجة موقع ويب متجاوب باستخدام التقنيات الأساسية لعرض الخدمات التقنية",
    "proj-5-title": "تطبيق جوال لادارة الملاعب",
    "proj-5-desc":
      "تطبيق موبايل تم تطويره باستخدام Flutter لإدارة المهام اليومية مع قاعدة بيانات محلية.",
    "proj-6-title": "نظام تحليل بيانات المبيعات",
    "proj-6-desc":
      "لوحة تحكم تفاعلية باستخدام Power BI لتحليل بيانات مبيعات شركة تجارية.",
    "proj-link": "عرض المشروع",
    "certs-title": "الشهادات والدورات",
    "contact-title": "تواصل معي",
    "form-name": "الاسم",
    "form-email": "البريد الإلكتروني",
    "form-msg": "رسالتك",
    "form-btn": "إرسال",
    "footer-text": "زياد الحريشي",
  },
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "hero-welcome": "Welcome, I am",
    "hero-name": "Zeyad Alhuraishi",
    "hero-title": "IT Engineer",
    "hero-desc":
      "Information Technology Engineer graduate with a passion for software development and data analysis. Seeking to build innovative technical solutions.",
    "btn-contact": "Contact Me",
    "btn-cv": "Download En CV",
    "btn-cv2": "Download Ar/En CV",
    "about-title": "About Me",
    "about-intro":
      "I am an Information Technology engineer with a strong foundation in computer science, possessing hands-on experience in application development, data analysis, and systems management. I combine theoretical knowledge with practical implementation to build scalable and efficient technical solutions.",
    "about-algorithms":
      "🧠 I have experience in algorithms and data structures, including Binary Search, Sorting algorithms, and time complexity analysis, along with efficient handling of arrays, lists, trees, and queues.",
    "about-software-eng":
      "🏗️ In software engineering, I apply Clean Code principles and perform system refactoring, utilizing design patterns, structuring projects into reusable components.",
    "about-flutter":
      "📱 I have strong experience in Flutter development, having built a complete sports field booking application featuring professional UI/UX, dark mode support, multilingual capabilities, advanced state management, and interactive booking and notification systems.",
    "about-web":
      "🌐 I also have experience in web development using HTML, CSS, and JavaScript, with the ability to build professional portfolio websites, support multilingual features, handle forms, integrate services like EmailJS, and resolve deployment and path-related issues.",
    "about-db":
      "🗄️ I have a strong background in databases using SQL, including table design, relationships, and efficient query writing.",
    "about-python":
      "🐍 I am proficient in Python, using it to solve algorithmic problems, manipulate data, and understand execution flow in depth.",
    "about-linux":
      "💻 I am also familiar with Linux systems and command-line interface (CLI) for managing files and environments.",
    "about-networking":
      "🌐 In networking and IT, I understand OSI and TCP/IP models, protocols such as HTTP, DNS, and DHCP, as well as IP addressing and subnetting, LAN setup, and troubleshooting using tools like ping and traceroute, along with basic cybersecurity and technical support knowledge.",
    "about-data-analysis":
      "📊 In data analysis, I use Excel at an advanced level, automate tasks using VBA, and create professional dashboards using Power BI.",
    "about-conclusion":
      "🎯 I have a high typing speed, strong problem-solving skills, fast learning ability, and experience working on real-world projects from concept to deployment, which makes me well-suited for roles in software development, web development, data analysis, or IT support.",
    "info-edu-label": "👨‍🎓Education:",
    "info-edu-val":
      "B.Sc. in IT Engineering - Faculty of Engineering - University of Aden",
    "info-lang-label": "📖 Languages:",
    "info-lang-val": "Arabic (Native), English (Intermediate)",
    "skills-title": "Technical Skills",
    "skill-desc-1": "App development and BackEnd",
    "skill-desc-2": "Building full Interfaces mobile applications",
    "skill-desc-3": "Web UI design using HTML/CSS/JS",
    "skill-desc-4": "Handling SQL and NoSQL",
    "skill-desc-5": "Networking basics and routing",
    "skill-desc-6": "Data analysis with Power BI & Excel Advance",
    "projects-title": "Projects",
    "proj-1-title": "Snake Web Game",
    "proj-1-desc":
      "Design and development of a responsive app using core technologies to showcase technical services.",
    "proj-2-title": "Interactive Dashboard",
    "proj-2-desc":
      "Design and development of a responsive app using core technologies to showcase technical services.",
    "proj-3-title": "Interactive Scrolling Page",
    "proj-3-desc":
      "Design and development of a responsive app using core technologies to showcase technical services.",
    "proj-4-title": "An interface to dispaly iphone colors.",
    "proj-4-desc":
      "Design and development of a responsive app using core technologies to showcase technical services.",
    "proj-5-title": "App for manage football reservations",
    "proj-5-desc":
      "Mobile application developed using Flutter for daily task management with a local database.",
    "proj-6-title": "Sales Data Analysis System",
    "proj-6-desc":
      "Interactive dashboard using Power BI to analyze sales data for a commercial company.",
    "proj-link": "View Project",
    "certs-title": "Certifications",
    "contact-title": "Contact Me",
    "form-name": "Name",
    "form-email": "Email",
    "form-msg": "Your Message",
    "form-btn": "Send",
    "footer-text": "Zeyad Alhuraishi",
  },
};

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
