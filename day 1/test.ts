/** @format */

const a = {
  number: 123,
  number2: 123,
  number3: 123,
  number4: 123,
};
const b = [a, a];

const c = JSON.stringify(a);
console.log(String(a));
console.log(JSON.stringify(a));
console.log(a);
console.log(b);
console.log(String(b));

// object = object
// json = string
// string != json

// simpan ke file => seluruh tipe data nonprimitive => string
console.log(JSON.parse(c).number);
