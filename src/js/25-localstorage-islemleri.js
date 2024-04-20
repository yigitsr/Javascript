let user = { userName: "elif kutlu", isActive: true };

// localStorage.setItem("userInfo", user);
localStorage.setItem("userInfo", JSON.stringify(user));

let userInfo = localStorage.getItem("userInfo"); // bilgiyi al
userInfo = JSON.parse(userInfo);

console.log(userInfo);

// userInfo
// '{"userName":"elif kutlu","isActive":true}'
// userInfo.isActive
// undefined
// JSON.parse(userInfo)
// {userName: 'elif kutlu', isActive: true}
// userInfo=JSON.parse(userInfo)
// {userName: 'elif kutlu', isActive: true}
// userInfo
// {userName: 'elif kutlu', isActive: true}

// localStorage.getItem('number')

// '11'
// let items[1,2,3,user]
// VM1461:1 Uncaught SyntaxError: Unexpected token '['
// let items=[1,2,3,user]
// undefined
// items
// (4) [1, 2, 3, {…}]0: 11: 22: 33: {userName: 'elif kutlu', isActive: true}isActive: trueuserName: "elif kutlu"[[Prototype]]: Objectlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// localStorage.setItem('newItems', items)
// undefined
// newItems
// VM1625:1 Uncaught ReferenceError: newItems is not defined
//     at <anonymous>:1:1
// (anonim) @ VM1625:1
// localStorage.setItem('newItems', JSON.stringify(items))
// undefined
// localStorage.getItem('newItems')
// '[1,2,3,{"userName":"elif kutlu","isActive":true}]'
// JSON.parse(ocalStorage.getItem('newItems')
// )
// VM1809:1 Uncaught ReferenceError: ocalStorage is not defined
//     at <anonymous>:1:12
// (anonim) @ VM1809:1
// JSON.parse(localStorage.getItem('newItems'))
// (4) [1, 2, 3, {…}]0: 11: 22: 33: {userName: 'elif kutlu', isActive: true}length: 4[[Prototype]]: Array(0)
