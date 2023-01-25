import { waitForElementToBeRemoved } from "@testing-library/dom";
import { render } from "less";
import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

window.addEventListener("load", (event) => {
  document.querySelectorAll(".nav-link")[2].style.color = "pink";
});

document.querySelector("h2").addEventListener(
  "mouseover",
  (ev) => {
    ev.target.style.color = "pink";
    setTimeout(() => {
      ev.target.style.color = "";
    }, 500);
  },
  false
);
document.querySelector("p").addEventListener(
  "mouseover",
  (ev) => {
    ev.target.style.color = "grey";
    setTimeout(() => {
      ev.target.style.color = "";
    }, 500);
  },
  false
);

// const a = document.querySelector(".container.home");
// a.setAttribute("class", "container home b");

const tumResimler = document.querySelectorAll("img");

tumResimler.forEach((resim) => {
  resim.addEventListener("dblclick", (event) => {
    resim.style.filter = "grayscale(100%)";
  });
});

tumResimler.forEach((resim) => {
  resim.addEventListener("click", (event) => {
    resim.style.filter = "none";
  });
});

window.addEventListener("resize", fresize);
let x = 0;
function fresize(event) {
  let txt = (x += 1);
  console.log(event);

  if (window.innerWidth < 800) {
    document.querySelector("body").style.backgroundColor = "#FEF3F4";
  } else if (window.innerWidth > 800) {
    document.querySelector("body").style.backgroundColor = "white";
  }
}

const milan = document.querySelector("input");
milan.addEventListener("focus", (ev) => {
  ev.target.style.backgroundColor = "red";
});

// document.querySelector("input").addEventListener("");
// if (milan.backgroundColor == "red") {
//   event.target.style.backgroundColor = "white";
// }

const mete = document.getElementsByClassName("text-content");
mete.addEventListener("select", () => {
  alert("select kullanıldı!");
});

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
  if (key.keyCode == 65) {
    alert("The 'a' letter has been pressed!");
  }
}

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }
