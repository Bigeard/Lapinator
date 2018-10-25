var x = document.getElementById("items-menu");
var i = document.getElementById("icon");
var n = document.getElementById("nav");

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
        n.style.backgroundColor = "transparent";
        x.style.backgroundColor = "transparent";
    } else {
        mobile = false;
        i.style.display = "none";
        x.style.display = "flex";
    }
}

function clickMenu() {
    if (x.style.display === "block") {
        n.style.backgroundColor = "transparent";
        x.style.backgroundColor = "transparent";
        x.style.display = "none";
        i.style.transform = "rotate(180deg)";
    } else {
        n.style.backgroundColor = "white";
        x.style.backgroundColor = "white";

        x.style.display = "block";
        x.style.opacity = "1";
        i.style.transform = "rotate(90deg)";
    }
}

// var form = document.getElementById('form');

// // Add a listener to the submit event
// form.addEventListener('submit', function (e) {
//     var errors = [];

//     if(document.getElementById("text").value == "hello world") {
//         window.location = "blog.html";
//     } else {
//         document.getElementById("error").innerHTML = "Fail authentification..."
//     }
    

//     if(errors.length) {
//          e.preventDefault(); // The browser will not make the HTTP POST request
//          return;
//     }
// });

function clickSubmit() {
    var pwd = document.getElementById("text")
    if(pwd.value == "nuggets") {
        window.location = "hi.html";
    } else {
        document.getElementById("error").innerHTML = "Erreur d'authentification..."
        pwd.style.border= "solid 1px #ff5858";
    }
}