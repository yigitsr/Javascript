let userName = prompt("kullanici adinizi giriniz");

// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)} degilse {console.log('bilgi yok')}
// if (username.length > 0) {console.log(username)} else {console.log('bilgi yok')}

if (userName) {
  // if kismi her zaman true calisir.
  console.log(`kullanici bilginiz: ${userName}`);
} else {
  console.log("kullanici bilgisi yok");
}
