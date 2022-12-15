
let signIn=document.querySelector("#signIn");
signIn.addEventListener("submit",function(event){
    event.preventDefault();
    let user=signIn.Email1.value;
    let password=signIn.password.value;

    let storedUser=localStorage.getItem("user")
    let storedPassword=localStorage.getItem("password")

    if(user!=storedUser){
        alert("user not registered!");
    }
    else{
        if(password!=storedPassword){
            alert("wrong password")
        }
        else{
            alert("logIn successful!")
            window.location.assign("./dashboard.html")
        }
    }
})
let logo=document.querySelector("#logo")
logo.addEventListener("click",()=>{
    window.location.assign("./index.html")
})