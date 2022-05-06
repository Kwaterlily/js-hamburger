// mostrare / nascondere il menu principale (mobile) cliccando sull' icona hamburger-menu
var  clickMenu = document.getElementById(".fas");

clickMenu.addEventListener('click', 

    function () {
        clickMenu.classList.add(" .hamburger-menu .hamburger-menu .active");
    }
);