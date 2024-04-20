let isActive = false; // 0
isActive = true; // 1

console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

boolean("11"); // true
boolean("0"); // true
boolean(""); //false

userName = "user";
// boolean icinde veri varsa true yoksa false olarak gosterir
console.log("user name: ", boolean(userName));

// 0, -0, null, false, NaN, undefined, ("") -->

boolean(0); //false
boolean(-0); //false
boolean(-0.1); //true
boolean(0 === 0); // true

boolean(userName.length > 0); // true
if (userName.length > 0); // usernamein length i buyuk mu sifirdan : true
