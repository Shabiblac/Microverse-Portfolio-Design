let desktopMenu = document.querySelector(".desktop-menu");
let closeMobile = document.querySelector(".cancle-mobile");
let mobileMenu = document.querySelector(".menu");
let coverMenu = document.querySelector(".nav-cover");
const hero = document.querySelector(".hero-section");

const tags = document.querySelectorAll(".menu-link")
tags.forEach(tag => {
    tag.addEventListener("click", () => {
        coverMenu.classList.toggle('cover-mobile')
        mobileMenu.classList.remove('hide')
        desktopMenu.classList.toggle("hide");
        closeMobile.classList.toggle("hide");
        hero.classList.toggle("blur");

    })
})

mobileMenu.addEventListener("click", toggleMenu);
closeMobile.addEventListener("click", closeMenu);


function toggleMenu() {
    
    coverMenu.classList.toggle("cover-mobile");
    mobileMenu.classList.toggle('hide');
    closeMobile.classList.toggle("hide");
    desktopMenu.classList.toggle("hide");
    hero.classList.toggle("blur");
}

function closeMenu() {
        closeMobile.classList.toggle("hide");
        hero.classList.toggle("blur");
        coverMenu.classList.toggle("cover-mobile");
        desktopMenu.classList.toggle("hide");
        mobileMenu.classList.toggle("hide")
    }
