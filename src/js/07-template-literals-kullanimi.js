let userName = "hakan";
const DOMAIN = "kodluyoruz.org";

let email = userName + "@" + DOMAIN;

// console.log(
//   "merhaba ",
//   userName,
//   " sitemize hosgeldin ",
//   "mail adresin: ",
//   email
// );
const date = new Date();
let info = `merhaba ${userName} sitemize hosgeldin.. 

mail adrersin: ${email}

mail adresinin uzunlugu: ${email.length}

borcunuz:  ${2 + 3 * 10} TL

gunun saat bilgisi: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}

kisa isminiz: ${userName[0]}.

`;

console.log(info);
