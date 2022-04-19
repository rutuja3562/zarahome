
import {navbar} from "../component/navbar.js";
console.log(navbar);
let nav_div = document.getElementById("logdiv");
nav_div.innerHTML = navbar();

// import clickItem from "../Homepage/scripts/click_item.js";
// clickItem();
// let footer_div = document.getElementById("footer");
// footer_div.innerHTML = footer();

document.querySelector("form").addEventListener("submit", signin);
let rus = JSON.parse(localStorage.getItem("userItms"));

function signin(event) {
    event.preventDefault();

    let userem = document.querySelector("#email").value;
    let userpasswd = document.querySelector("#password").value;
    let flag = false;
    for (var i = 0; i < rus.length; i++) {
        if (rus[i].usermail == userem && rus[i].userpass == userpasswd) {
            flag = true;
            // window.location.href = "./index.html";
            console.log("hii")
        }
    }
    if (flag == true) {
        window.location.href = "../Homepage/index.html";
           console.log("hlo");
    }
    // Homepage\index.html
    else {
        alert("Invalid Credentials")
           console.log("bye");
    }
}

// document.getElementById("logdiv").addEventListener("mouseover",close);
// function close(){
//     if 
//       (document.getElementById("login_container").style.display = "display")
//     {
//       document.getElementById("login_container").style.display = "none";
//     }
// }
