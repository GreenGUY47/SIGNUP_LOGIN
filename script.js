const signup = document.querySelector(".formSIGN")
const links = document.querySelector(".links")
const links2 = document.querySelector(".links2")
const Greet1 = document.querySelector(".Greet1")
const LogIn = document.querySelector(".LogIn")
const greet2 = document.querySelector(".greet2")
const shap = document.querySelector(".shape")
const shap2 = document.querySelector(".shape2")
const headingP = document.querySelector(".loginPageGreet2")
const headingH = document.querySelector(".loginPageGreet1")
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
const errorBtn = document.querySelector("#errorbtn")
const error = document.querySelector(".message")
const imgRight = document.querySelector(".imgBgGreet")
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
    playFormAnimation();
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
if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMsgs[2].textContent = "Please enter a valid email address.";
    errorMsgs[2].style.display = "block";
    return;
}
if (!pwd)              { errorMsgs[3].style.display = "block"; return; }
if (!conpwd)           { errorMsgs[4].style.display = "block"; return; }
if (pwd !== conpwd)    { errorMsgs[5].style.display = "block"; return; }
postUserData({ uname, fname, email, pwd });
window.location.href = "Greet.html";
async function postUserData(data) {
    try {
        const response = await fetch("url", {
            method: "POST",
            headers: {                          // Fix 1: 'header' → 'headers'
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            window.location.href = "Greet.html";
        } else {
            errorBase.style.display = "block";
            console.error(result.message);      
        }
    }
    catch (error) {
        errorBase.style.display = "block";
        errorBase.style.    
        console.error(error);                
    }
}   
});                                        
errorBtn.addEventListener("click",function(){
    if(errorBase.style.display = "block"){
        errorBase.style.display = "none"
    }else{
        errorBase.style.display = "block"
    }
})
gsap.from(".shape",{
    y:-800,
    delay:0.6,
    opacity:0,
    duration:1.6,
    ease: "bounce.out",
})
gsap.from(".imgBgGreet",{
    scale:0,
    delay:1,
    opacity:0,
    duration:0.7
})
gsap.from(".loginPageGreet1",{
    x:500,
    delay:1,
    duration:3,
    opacity:0
})
gsap.from(".loginPageGreet2",{
    x:500,
    delay:2,
    duration:3,
    opacity:0
})
gsap.from(".formSIGN",{
    delay:2,
    opacity:0,
    scale:0,
    duration:1,
})
gsap.from(".grid1 label,.grid1 input", {
    opacity: 0,
    x: 50,
    delay:2.7,
    duration: 0.5,
    stagger: 0.15
});
gsap.fromTo(".grid1 button",
{
    opacity: 0,
    y: 30
},
{
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 4
});

let start = 1; 

document.querySelector(".btnChanger").addEventListener("click", () => {
    
    if(start === 1){ 
        gsap.from(".shape2",{
    y:-800,
    delay:0.6,
    opacity:0,
    duration:1.6,
    ease: "bounce.out",
})
gsap.from(".imgleft",{
    scale:0,
    delay:1,
    opacity:0,
    duration:0.7
})
gsap.from(".loginPageGreet3",{
    x:-500,
    delay:1,
    duration:3,
    opacity:0
})
gsap.from(".loginPageGreet4",{
    x:-500,
    delay:2,
    duration:3,
    opacity:0
})
        gsap.from(".grid2 label, .grid2 input", {
            opacity: 0,
            x: 50,
            duration: 0.5,
            stagger: 0.15
        });

        gsap.fromTo(".grid2 button", 
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.5
        });

        start = 2; 
    }

    playFormAnimation();
});