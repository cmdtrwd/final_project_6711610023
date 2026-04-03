document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".bars");
    const navBar = document.querySelector(".nav-bar");

    menuIcon.addEventListener("click", function (event) {
        navBar.classList.toggle("active");
        event.stopPropagation(); 
    });


    document.addEventListener("click", function (event) {
        if (navBar.classList.contains("active") && !navBar.contains(event.target) && !menuIcon.contains(event.target)) {
            navBar.classList.remove("active");
        }
    });
});