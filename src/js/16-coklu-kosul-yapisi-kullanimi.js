let userName = prompt("kullanici adinizi giriniz: ");
let age = prompt("yasiniz: ");
let info = document.querySelector("#info");

// if (userName && age >= 18) {
//   console.log("ehliyet alabilirsiniz");
// } else if (!userName) {
//   console.log("kullanici adiniz yok");
// } else if (!(age >= 18)) {
//   console.log("yas bilginiz yok veya 18 yasindan kucuksunuz");
// }

if (userName && age >= 18) {
  info.innerHTML = "ehliyet alabilirsiniz";
} else if (!userName) {
  info.innerHTML = "kullanici adiniz yok";
} else if (!(age >= 18)) {
  info.innerHTML = "yas bilginiz yok veya 18 yasindan kucuksunuz";
}
