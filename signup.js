

let signUp=document.querySelector("#signUp");
signUp.addEventListener("submit",function(event){
    event.preventDefault();
    let username=signUp.name.value;
    let user=signUp.Email.value;
    let password=signUp.password.value;
    
    if(password!=signUp.passwordchk.value){
        alert("Passwords do not match !");
    }
    else{
        localStorage.setItem("user",user);
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
        alert("Sign Up successful !")

        signUp.request();
    }
})

let logo=document.querySelector("#logo")
logo.addEventListener("click",()=>{
    window.location.assign("./index.html")
})