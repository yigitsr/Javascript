// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5];

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);

items.push(maleUsers);
console.log(items);

console.log(items.length);
console.log(items[0].length); // array iicndeki istedigimiz arrayin lenght bilgisini aldik
console.log(items[0][0]); // ayse bilgisine ulastik

// array icerisinden oge ayirmak ---> splice(post, item?)

let newItems = items.splice(1, 5);
console.log(newItems);
console.log(items);

// array icindeki ogenin index bilgisini bulmak ---> indexOf('value')
items.unshift("lorem");

items.push("ipsum");

console.log(items.indexOf("lorem"));
console.log(items[items.indexOf("lorem")]);

// array kopyalamak ---> slice[...ES6]

let copyItems = items;
console.log(items);
copyItems.pop();
console.log("copyItems", copyItems);
console.log("items", items);

copyItems = items.slice(); // slice kopyalama yapti.
copyItems.pop(); // son ogeyi cikarttik.
console.log("copyItems", copyItems);
console.log("items", items);

let es6Items = [...items]; // es6 ve sonrasinda gelen kopylama islemi
console.log(es6Items);

// iki array bilgisini birlestirmek --->[...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers]; // es6 birden fazla array yapisini birlestirmek
console.log(allUsers);

// array icerisindeki bilgiyi stringe cevirmek ---> toString, Join
console.log(allUsers.toString());
console.log(allUsers.join(" === "));

// istedigimiz index bilgisine oge eklemek ---> splice(index,0, value)
allUsers.splice(allUsers.length - 1, 0, "melissa");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "lorem");
console.log(allUsers);
