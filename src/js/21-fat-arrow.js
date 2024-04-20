function hello(firstName) {
  console.log(`merhaba ${firstName}`);
}
hello("javaScript");

const helloFuncV1 = (firstName) => {
  console.log(`merhaba ${firstName}`);
};
helloFuncV1("elif");

const helloFuncV2 = (parametre) => console.log(`merhaba ${parametre}`);
helloFuncV2("elif2");

const helloFuncV3 = (parametre, lastName) =>
  console.log(`merhaba ${parametre} ${lastName}`);
helloFuncV3("elif", "kutlu");

const helloFuncV4 = (parametre, lastName) => {
  let info = `merhaba ${parametre} ${lastName}`;
  return info;
};

const infoMessage = helloFuncV4("1elif", "kutlu");
console.log(infoMessage);
