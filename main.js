const button = document.querySelector("#burguer-button");
const menu = document.querySelector("#menu-link");

button.addEventListener("click", function(){
    button.classList.toggle("active");
    menu.classList.toggle("active-side-bar");
})