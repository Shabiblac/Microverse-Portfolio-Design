let desktopMenu = document.querySelector(".desktop-menu");
let closeMobile = document.querySelector(".cancle-mobile");
let mobileMenu = document.querySelector(".menu");
let coverMenu = document.querySelector(".nav-cover");

mobileMenu.addEventListener("click", toggleMenu);
closeMobile.addEventListener("click", closeMenu);


function toggleMenu() {
    coverMenu.classList.toggle("cover-mobile");
    mobileMenu.classList.toggle("hide");
    closeMobile.classList.toggle("hide");
    desktopMenu.classList.toggle("hide");}

    function closeMenu() {
        closeMobile.classList.toggle("hide");
        coverMenu.classList.toggle("cover-mobile");
        desktopMenu.classList.toggle("hide");
        mobileMenu.classList.toggle("hide")
    }