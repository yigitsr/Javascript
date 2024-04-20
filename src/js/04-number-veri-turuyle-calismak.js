// number veri turu tanimlamak

let price = 100;
let tax = 0.18;
let totalTax = price * tax;
let total = price + totalTax;
console.log(
  "fiyat:",
  price,
  "kdv orani:",
  tax,
  "kdv tutari:",
  totalTax,
  "fiyat:",
  total
);

// arttirma ve azaltma islemleri:

let counter = 320;

//toplama//
counter = counter + 1; //uzun yontem
counter += 1;
counter++;
console.log(counter);

//cikarma//
counter--;
counter -= 1;
console.log(counter);

//carpma//
counter *= 10;
console.log(counter);

//bolme//
counter /= 2;
console.log(counter);

// islem onceligi
console.log(2 + 5 * 10);
console.log((2 + 5) * 10);

//mod(kalan) alma %: sayi tek mi cift mi

console.log(19 % 2); // 0 ise cift, 1 ise tek

// 8 urun alan koliye tum urunler sigiyor mu?

console.log("koli kalan urun ornegi; ", 18 % 8);

// us alma **:
console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

// asagi yuvarlama islemi --> Math.floor:
console.log("asagi yuvarlama: ", Math.floor(1.9));

// yukari yuvarlama islemi -->Math.ceil:

console.log("yukari yuvarlama: ", Math.ceil(1.1));

// yakina yuvarlama islemi -->Math.round:
console.log("yakina yuvarlama: ", Math.round(1.9));

let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);
console.log("number constructor icine bilgi gonderildi: ", Number("111"));
