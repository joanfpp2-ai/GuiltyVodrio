const bton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".Menu_Horizontal");

bton.addEventListener("click",()=>{
    menu.classList.toggle("active");
});