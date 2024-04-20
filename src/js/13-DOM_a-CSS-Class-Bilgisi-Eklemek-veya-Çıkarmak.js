let greeting = document.querySelector("#greeting");
greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "secound-class", "third-class"); // birden fazla class eklemek

greeting.classList.remove("title", "secound-class"); // birden fazla class silmek

console.log(greeting.classList);
