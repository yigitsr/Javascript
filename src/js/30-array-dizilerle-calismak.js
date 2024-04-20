let domain = "kodluyoruz.org";
let isActive = false;
let items = [1, 2, 3, 4, isActive, domain];

console.log(items);

// items += [1, 2, 3];
// console.log(items);

let emptyArray = []; //bos liste

console.log(items.length); // array icindeki oge sayisi

document.querySelector("#info").innerHTML = items.length;

// array icindeki ilk elemanin cagirilmasi
console.log(items[0]);

// array icindeki son elemanin cagirilmasi
console.log(items[items.length - 1]);

// degisken icindeki bilginin array olup kontrol edilmesi
console.log(typeof items);
console.log(Array.isArray(items));

// hangileri isArray ---> true verir
console.log(Array.isArray([]));
console.log(Array.isArray(1));
console.log(Array.isArray(true));

// array icindeki ortadaki elemanin cagirilmasi
console.log(items[Math.floor(items.length / 2)]);
