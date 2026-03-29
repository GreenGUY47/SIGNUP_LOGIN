const signup = document.querySelector(".formSIGN")
const links = document.querySelector(".links")
const links2 = document.querySelector(".links2")
const Greet1 = document.querySelector(".Greet1")
const LogIn = document.querySelector(".LogIn")
const greet2 = document.querySelector(".greet2")
const shap = document.querySelector(".shape")
const shap2 = document.querySelector(".shape2")
const btnChanger = document.querySelector(".btnChanger")
const uname = document.querySelector("#uname")
const fname = document.querySelector("#fname")
const email = document.querySelector("#email")
const pwd = document.querySelector("#pwd")
const errorMsg = document.querySelector(".errorMsg")
const conpwd = document.querySelector("#conpwd")
const btnleft = document.querySelector(".btn")
const form = document.querySelector("form")
const inputs = document.querySelector("form input")
const body = document.body;
btnChanger.addEventListener("click",function(){
    if(btnChanger.innerHTML === "LOGIN"){
    signup.style.display = "none"
    LogIn.style.display = "block"
    Greet1.style.display = "block"
    greet2.style.display = "none"
    links.style.display = "none"
    shap.style.display = "none"
    shap2.style.display = "block"
    btnChanger.innerHTML = "SIGNUP"
    }else{
    signup.style.display = "grid"
    LogIn.style.display = "none"
    Greet1.style.display = "none"
    greet2.style.display = "block"
    links.style.display = "flex"
    shap.style.display = "block"
    shap2.style.display = "none"
    btnChanger.innerHTML = "LOGIN"
    }
})
form.addEventListener("submit",function(event){
    event.preventDefault();
    inputs.foreach(input => {

    })
})

