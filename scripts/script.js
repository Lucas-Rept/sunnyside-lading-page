let menuButton = document.getElementById("menuIcon");
menuButton.addEventListener("click", show);

let nav = document.getElementById("mobileMenu");

function show(){
    console.log("oi");
    if(nav.classList.contains("show") == false){
        nav.classList.add("show");
        nav.classList.remove("hide")
    }
    else{
        nav.classList.remove("show");
        nav.classList.add("hide");
    }
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 750){
        nav.classList.remove("hide");
    }
});