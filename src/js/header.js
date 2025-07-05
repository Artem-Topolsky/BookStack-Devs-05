const burgerBtn = document.querySelector(".burger-menu");
const openNavbar = document.querySelector(".navbar-overlay");
const closeNavbarBtn = document.querySelector(".close-navbar-btn");
const choiceSectionInHeader = document.querySelector("ul.header-list")
const choiceSectionInNavbar = document.querySelector("ul.navbar-list");

burgerBtn.addEventListener("click", clickOpenNavbar);
closeNavbarBtn.addEventListener("click", closeNavbar);

choiceSectionInNavbar.addEventListener("click", handlerNavbarChoice);
choiceSectionInHeader.addEventListener("click", handlerHeaderChoice);

function clickOpenNavbar() {
    openNavbar.classList.remove("is-hidden");
};

function handlerNavbarChoice(event) {
    console.dir(event.target.dataset.id);
    closeNavbar();
};

function handlerHeaderChoice(event) {
    console.dir(event.target.dataset.id);
};

function closeNavbar() {
    openNavbar.classList.add("is-hidden");
}

// console.log(window.innerHeight, window.innerWidth);

// console.log(document.documentElement.scrollHeight);

// console.log(document.documentElement.clientHeight);
