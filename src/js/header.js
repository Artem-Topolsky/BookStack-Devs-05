document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-menu");
  const closeBtn = document.querySelector(".close-navbar-btn");
  const navbarOverlay = document.querySelector(".navbar-overlay");
  const navLinks = document.querySelectorAll(".navbar-list a");
  const header = document.querySelector(".header");
  
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {

      header.classList.add("header--hidden");
    } else {

      header.classList.remove("header--hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  burgerBtn.addEventListener("click", () => {
    navbarOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  closeBtn.addEventListener("click", () => {
    navbarOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      navbarOverlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && navbarOverlay.classList.contains("active")) {
      navbarOverlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
});