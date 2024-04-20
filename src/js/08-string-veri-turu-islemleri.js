let email = "elifkutlu41@gmail.com";
let firstName = "Elif";
let lastName = "KUTLU";

// string karakter sayisi ---> length

console.log(email.length);

// ilk karakteri bulmak ---> [0]

console.log(firstName[0]);
console.log(lastName.charAt(0));

// buyuk harf / kucuk harf --->

firstName = firstName.toUpperCase();

console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// string icinde istedigimiz bilgiyi aramak ve yerini bulmak icin ---> search:

console.log(email.search("@"));
console.log(email[11]);
email.search("olmayan"); // -1 verir

// belirli bir yere kadar al ---> slice: (domain bilgisi)

let DOMAIN = email.slice(11);
let domain = email.slice(email.search("@") + 1);
console.log(domain);

domain.indexOf("."); // 5
domain.slice(0, 5); //'gmail'

console.log(domain.slice(0, domain.indexOf("."))); // sadece 'gmail' kismini aldik

// bilgiyi degistir ---> replace

let kodluyoruzEmail = email.replace("gmail.com", "kodluyoruz.org");
console.log(kodluyoruzEmail);

// istedigim bilgi var mi ---> includes:

email.includes("e"); // emailde e harfi var mi // true
email.includes("elif"); // true
email.includes("elf"); // false

email.includes(email.slice(0));

// istedigim bilgiye basladi mi? bitti mi? ---> startsWidth endsWidth

email.endsWith("kodluyoruz.org"); // false
kodluyoruzEmail.endsWith("kodluyoruz.org"); // true
kodluyoruzEmail.startsWith("elifkutlu41@gmail.com"); // false

kodluyoruzEmail.startsWith("elifkutlu41@kodluyoruz.com"); // false
kodluyoruzEmail.startsWith("elifkutlu41@kodluyoruz.org"); // true

console.log(kodluyoruzEmail.startsWith("elifkutlu41@kodluyoruz.org"));

// ilk harflerini buyuk yapmak

firstName = "firstname";
lastName = "lastname";

let fullName = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLocaleLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}
`;

console.log(fullName);
