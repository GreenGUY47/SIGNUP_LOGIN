const signup = document.querySelector(".formSIGN")
const links = document.querySelector(".links")
const links2 = document.querySelector(".links2")
const Greet1 = document.querySelector(".Greet1")
const LogIn = document.querySelector(".LogIn")
const greet2 = document.querySelector(".greet2")
const shap = document.querySelector(".shape")
const btnChanger = document.querySelector(".btnChanger")
btnChanger.addEventListener("click",function(){
    if(btnChanger.innerHTML === "LOGIN"){
    signup.style.display = "none"
    LogIn.style.display = "block"
    Greet1.style.display = "flex"
    greet2.style.display = "none"
    links.style.display = "none"
    shap.style.display = "none"
    btnChanger.innerHTML = "SIGNUP"
    }else{
    signup.style.display = "grid"
    LogIn.style.display = "none"
    Greet1.style.display = "none"
    greet2.style.display = "block"
    links.style.display = "flex"
    shap.style.display = "block"
    btnChanger.innerHTML = "LOGIN"
    }
})