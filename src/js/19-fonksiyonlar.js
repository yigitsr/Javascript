function helloWord() {
  console.log("hello world");
}

function hello() {
  console.log("merhaba");
  helloWord();
}

hello(); // calistir

// hata alabiliriz
// function userCheck() {

//   if (userName && age >= 18) {
//     info.innerHTML = "ehliyet alabilirsiniz";
//   } else if (!userName) {
//     info.innerHTML = "kullanici adiniz yok";
//   } else if (!(age >= 18)) {
//     info.innerHTML = "yas bilginiz yok veya 18 yasindan kucuksunuz";
//   }

// }
