let price = "100";
let user = "hakan";

// == esitse

console.log("== : ", price == 1);
console.log("== : ", price == 100);

// === hem degeri hem de turu esitse

console.log("=== : ", price === 1);
console.log("=== : ", price === 100);

// != esit degilse

console.log(price != 1);
console.log(user != "guest");

// < kucukse

console.log(price < 100);

// <= kucuk veya esitse

console.log(price <= 100);

// buyukse
console.log(price > 200);

// >= buyuk veya esitse
console.log(price >= 100);

// && ve
price = 0;
console.log(price > 0 && user != "guest");

// || veya

console.log(price > 0 || user != "guest");

// ! degil (tersi)
user = "guest";
price = 1;

console.log(price > 0 && !user == "guest");
console.log(!(price > 0 && !user == "guest"));
