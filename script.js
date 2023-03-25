function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function changeimg() {
    if (document.getElementById("clouds2").src === "cloo2.png") {
        document.getElementById("clouds2").src = "rainyclouds.png";
    }
    else document.getElementById("clouds2").src = "cloo2.png";
}
document.querySelector('.button-solid').addEventListener('click', function(){
    const icon = this.querySelector('i');

    if(icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
})

function cats(){
    var element = document.body;
    const division = document.createElement("div");
    const node = document.createElement("img");
    element.classList.toggle("catsappear");
}

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    clouds2.style.left = -value * 1 + 'px';
    clouds.style.bottom = -value * 1 + 'px';
})

function reveal() {
var reveals = document.querySelectorAll(".animated");

for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
    } else {
    reveals[i].classList.remove("active");
    }
}
}
window.addEventListener("scroll", reveal);

function revealm() {
    var reveald = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveald.length; i++) {
        var wh = window.innerHeight;
        var Top = reveald[i].getBoundingClientRect().top;
        var Visible = 150;
    
        if (Top < wh - Visible) {
        reveald[i].classList.add("active");
        } else {
        reveald[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealm);
