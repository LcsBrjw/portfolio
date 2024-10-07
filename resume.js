// APPARITION DU MENU SOCIALS

const socMenu = document.querySelector("#soc-menu");
const socLogos = document.querySelector("#social");


socMenu.addEventListener('click', function(){
    socLogos.classList.toggle("active");
});



// GESTION DU BURGER MENU

const burButton = document.querySelector(".burgerButton");
const burCloseButton = document.querySelector(".burgerClose");
const sidenav = document.querySelector(".sidenav");
const sidenavLinks = document.querySelectorAll(".sidenav a"); // Sélectionnez tous les liens à l'intérieur de la sidenav

burButton.addEventListener('click', function(){
    sidenav.classList.add("active");
});

burCloseButton.addEventListener('click', function(){
    sidenav.classList.remove("active");
});

sidenavLinks.forEach(link => {
    link.addEventListener('click', function() {
        sidenav.classList.remove("active");
    });
});

