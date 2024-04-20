// hata-yonetimi-icin-try-catch-kullanimi
let products;
try {
  products.forEach((item) => console.log(item));
} catch (err) {
  console.log("error:", err);
  // products = [1, 2, 3]
  // products.forEach(item => console.log(item));
}

console.log("hata yontemi duzgun calisiyor");

let info = "kodluyoruz";
console.log(info);
