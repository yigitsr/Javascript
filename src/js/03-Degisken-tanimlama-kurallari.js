// camelCase

let kodluyoruzServerInfo = "kodluyoruz.org"; // dogru kullanim
let kodluyoruzSERverInfo = "kodluyoruz.org"; // bu dogru kullanim degil

// UPPER_CASE

const password = "12345"; // bu dogru kullanim degil
const PASSWORD = "12345"; // dogru kullanim
const SERVER_PASSWORD = "12345"; // dogru kullanim

// degiskenlerde turkce ve diger dil kullanmayin, sadece ingilizce olmali.
// anlamsiz degisken isimleri kullanmayin... x, y, z, k, i, e gibi anlamsiz degisken isimleri kullanmayin

// ## Ek Bilgi ## 1: boolean tanimlarken is/has kullanimi:

let isActive = true;
let hasPassword;
hasPassword = false;

// 2: line length < 80 karakteri gecmeyecek sekilde kod yazilmali

let firstName = "elif";
let lastName = "kutlu";
console.log(firstName, lastName);
