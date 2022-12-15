const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
let signPage=document.querySelector(".login")
signPage.addEventListener("click",()=>{
    window.location.assign("./signIn.html")
})
let signUpPage=document.querySelector(".signUp")
signUpPage.addEventListener("click",()=>{
    window.location.assign("./signUp.html")
})