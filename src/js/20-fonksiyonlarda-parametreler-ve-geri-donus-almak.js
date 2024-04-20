let firstName = "lorem";

// function greetings(firstName) {
//   console.log(`merhaba ${firstName ? firstName : ""}`);
// }

function greetings(firstName = "", lastName = "") {
  // default parametre aliyor.
  console.log(`merhaba ${firstName}`);
  console.log(`merhaba ${firstName} ${lastName}`);
}
console.log(firstName); //degiskenle ilgili bilgi
greetings(); // fonksiyona parametre gondermedik
greetings("parametre", "elif"); // parametre gonderdik

function greetings2(firstName, lastName) {
  let info = `merhaba ${firstName} ${lastName}`;
  return info;
}

let greetingsInfo = greetings2("ad", "soyad");
//blet info = "deneme";  ???
console.log(greetingsInfo);

function DomIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}

let htmlInfo = `<span style="color:red">COLOR REDDD</span>`;
DomIdWriteInfo("greeting", greetings2("elif", "kutlu"));
DomIdWriteInfo("greeting", htmlInfo);
DomIdWriteInfo("info", greetings2("elif", "kutlu"));
