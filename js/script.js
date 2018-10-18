var x = document.getElementById("menu");
var i = document.getElementById("icon");


window.onresize = function () {
    detectSize();
};

window.onload = function () {
    detectSize();
};

function detectSize() {
    if (window.innerWidth <= 580) {
        mobile = true;
        x.style.display = "none";
        i.style.display = "block";
        i.style.transform = "rotate(180deg)"
    } else {
        mobile = false;
        i.style.display = "none";
        x.style.display = "flex";
    }
}

function clickMenu() {
    if (x.style.display === "block") {
        x.style.display = "none";
        i.style.transform = "rotate(180deg)"
    } else {
        x.style.display = "block";
        i.style.transform = "rotate(90deg)"
    }
}