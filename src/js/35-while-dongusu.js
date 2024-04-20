//for dongusunu genellikle bir sayida dondurmek icin kullaniyoruz ama
// While Dongusu: sonsuza kadar donmesi icin kullaniyoruz
// bir sey olana kadar dondur
// https://www.w3schools.com/js/js_loop_while.asp

// let counter = 0;

// while (counter < 10) {
//   console.log(counter);
//   counter += 1;
// }

let userName = "";
while (!userName) {
  //username yoksa calis
  userName = prompt("kullanici adinizi giriniz");
  console.log(userName);
}

// kullanici deger girene kadar calistir.
