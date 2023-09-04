document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", openMenu);

    function openMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
});
