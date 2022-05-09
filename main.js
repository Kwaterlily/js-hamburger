// mostrare / nascondere il menu principale (mobile) cliccando sull' icona hamburger-menu
const  showClickMenu = document.querySelector(".fa-bars")
const  closeClickMenu = document.querySelector(".fa-times")

showClickMenu.addEventListener('click', 

    function () {
        document.querySelector(".hamburger-menu").className = "hamburger-menu active hamburger-menu ul hamburger-menu ul li a";
        // showClickMenu.style.display = "block";
    }
);
closeClickMenu.addEventListener('click', 

    function () {
        document.querySelector(".hamburger-menu"). className = "hamburger-menu";
        // closeClickMenu.style.display = "none"; 
    }
);