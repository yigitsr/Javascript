// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40];
console.log("items - ilk hali : ", items);

// array: sona oge/eleman eklemek ---> push
items.push(13);
console.log(items);

// array: basa oge/eleman eklemek ---> unshift
items.unshift(12);
console.log(items);

// array: sondaki ogeyi/elemani cikarmak ---> pop
let lastItems = items.pop(); // son elemani lastItems icerisine ekledik.
console.log(lastItems, items);

// array: bastakki ogeyi/elemani cikarmak ---> shift
let firstItems = items.shift(); // bastaki elemani firstItems icerisine ekledik.
console.log(firstItems, items);

// array icerisindeki bir ogenin bilgisinin degistirilmesi

// ilk ogenin degistirilmesi
items[0] = 3;
console.log(items);

//sonuncu ogenin degistirilmesi
items[items.length - 1] = 1;
console.log(items);

items[999] = 0;
console.log(items);
