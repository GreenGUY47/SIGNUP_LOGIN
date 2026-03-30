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
const errorMsgs = document.querySelectorAll(".errorMsg")
const conpwd = document.querySelector("#conpwd")
const btnleft = document.querySelector(".btn")
const form = document.querySelector("form")
const inputs = document.querySelector("form input")
const errorBase = document.querySelector(".base")
const error = document.querySelector(".message")
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
btnleft.addEventListener("click", function(event) {
  event.preventDefault(); // move this to the top

    const uname  = document.querySelector("#uname").value.trim();
    const fname  = document.querySelector("#fname").value.trim();
    const email  = document.querySelector("#email").value.trim();
    const pwd    = document.querySelector("#pwd").value.trim();
    const conpwd = document.querySelector("#conpwd").value.trim();

errorMsgs.forEach(span => span.style.display = "none");

if (!uname)            { errorMsgs[0].style.display = "block"; return; }
if (!fname)            { errorMsgs[1].style.display = "block"; return; }
if (!email)            { errorMsgs[2].style.display = "block"; return; }
if (!pwd)              { errorMsgs[3].style.display = "block"; return; }
if (!conpwd)           { errorMsgs[4].style.display = "block"; return; }
if (pwd !== conpwd)    { errorMsgs[5].style.display = "block"; return; }

    async function postUserData(data) {
        try{
            const response = await fetch("url",{
                method: "POST",
                header:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(data)
            })
            const result = await response.json()
            if(response.ok){
                window.location.href = "Greet.html"
            }else{
                errorBase.style.display = "block"
                message
            }
        }
        catch(error) {

    }
});