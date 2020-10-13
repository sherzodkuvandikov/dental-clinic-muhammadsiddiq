const hamburger = document.querySelector(".gamburger-menu");
const navmenu = document.querySelector(".site-nav-js");


hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("site-nav-js--close");
})