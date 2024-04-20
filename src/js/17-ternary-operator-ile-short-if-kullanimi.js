// eger kullanici adin varsa yazdir yoksa kullanici bilgisi bulunmadi yazdir
let userName = prompt("kullanici adinizi yaziniz");
let info = document.querySelector("#info");

// ternary kullanimi:
// kosul ? dogruysa : yanlissa
//  userName.length > 0 ? userName : "kullanici bilginiz bulunamadi :( "

info.innerHTML = `${userName ? userName : "kullanici bilginiz bulunamadi :( "}`;
