//Variable

let message;
message = "Hello, world!";
console.log(message);

//Number methods
let num = 123.456;
console.log(num.toFixed(2));
console.log(num.toString());
console.log(parseInt("123.45"));
console.log(parseFloat("123.45"));
console.log(Number.isInteger(123));
console.log(Number.isNaN(NaN));

//String methods
let str = "Hello World";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0));
console.log(str.charAt(-1));
console.log(str.substring(0, 5));
console.log(str.slice(0, 5));
console.log(str.split(" "));
console.log(" The space should go     ".trim());
console.log(str.includes("World"));
console.log(str.indexOf("World"));
