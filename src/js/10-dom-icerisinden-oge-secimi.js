// let h2 = document.getElementsByTagName("h2");
// console.log(h2.title.innerHTML);

let title = document.getElementById("title");
title.innerHTML = "degisen bilgi";
console.log(title);

let link = document.querySelector("ul#list>li>a"); // "#kodluyoruzLink"

link.innerHTML += " degisti";
// console.log(link.innerHTML);

link.style.color = "red";
link.classList.add("btn"); //classname ekliyor doma
