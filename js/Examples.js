//Variable

let message;
message = "Hello, world!";
console.log(message);

// Data Types

// Number methods
let num = 123.456;
console.log(num.toFixed(2));           // Output: 123.46
console.log(num.toString());           // Output: "123.456"
console.log(parseInt("123.45"));       // Output: 123
console.log(parseFloat("123.45"));     // Output: 123.45
console.log(Number.isInteger(123));    // Output: true
console.log(Number.isNaN(NaN));        // Output: true

// String methods
let str = "Hello World";
console.log(str.charAt(1));            // Output: "e"
console.log(str.concat("!", "!"));     // Output: "Hello World!!"
console.log(str.includes("World"));    // Output: true
console.log(str.indexOf("World"));     // Output: 6
console.log(str.slice(0, 5));          // Output: "Hello"
console.log(str.split(" "));           // Output: ["Hello", "World"]
console.log(str.toLowerCase());        // Output: "hello world"
console.log(str.toUpperCase());        // Output: "HELLO WORLD"
console.log(str.trim());               // Output: "Hello World"
console.log(str.replace("World", "JavaScript"));  // Output: "Hello JavaScript"



// Data Structures: Objects and Arrays


// OBJECTS Examples


// 1. Creating an Object
let sponsers = {
    name: "Techaxis",
    location: "Kumaripati"
}

console.log(sponsers.name)  // Techaxis
console.log(sponsers.location)  // Kumaripati


// 2. Updating an Object
sponsers.isAmazing = true
console.log(sponsers.isAmazing)  // true

console.log(sponsers)  // { name: 'Techaxis', location: 'Kumaripati', isAmazing: true }

delete sponsers.location 
console.log(sponsers)  // { name: 'Techaxis', isAmazing: true }

sponsers["likes software fellowship"] = true
console.log(sponsers)  // { name: 'Techaxis', isAmazing: true, 'likes software fellowship': true }

delete sponsers["likes software fellowship"]
console.log(sponsers)  // { name: 'Techaxis', isAmazing: true }


// 3. Using Objects
function makeUser(name, age) {
    return {
      name: name,   // same as name,
      age: age,     
      // ...other properties
    };
  }
  
let user = makeUser("software fellow", 21);
console.log(user.name); 


// 4. Property Existence Test using "in" operator
console.log("name" in user)  // true
console.log("height" in user)  // false


// 5. Iterating over Object Properties
let softwarefellow = { name: "Ada", age: 20, 'likes to code': true };

for (let key in softwarefellow) {
    // keys and values for the keys
    console.log( key, softwarefellow[key] );  // name Ada, age 20, likes to code true
}


// 6. Object Methods
let user1 = { name: "John", age: 30 };

user1.sayHi = function() {
    console.log("Hello!");
}

user1.sayHi(); // Hello!


// 7. "this" in Methods
let sponser2 = { name: "JobAXL", age: 30 };

sponser2.sayHi = function() {
    console.log("Hi I am, ",this.name);
}

sponser2.sayHi(); // Hi I am, JobAXL


// 7.2 why "this" is used
let sponser3 = { name: "JobAXL", age: 30 };

sponser3.sayHello = function() {
    console.log("Hello I am, ",sponser3.name);
}

sponser3.sayHello(); // Hi I am, JobAXL

// let organization = sponser3
// sponser3 = null

// organization.sayHello()  // TypeError: Cannot read property 'name' of null


// Arrays Examples

// 1. Creating an Array
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]);  // Apple

// 2. Updating an Array
fruits[1] = "Pear";
console.log(fruits[1]);  // Pear

// 3. Push and Pop
fruits.push("Mango");
console.log(fruits);  // [ 'Apple', 'Pear', 'Plum', 'Mango' ]

let last = fruits.pop();    
console.log(last);  // Mango
console.log(fruits);  // [ 'Apple', 'Pear', 'Plum' ]

// 4. Shift and Unshift
fruits.shift();
console.log(fruits);  // [ 'Pear', 'Plum' ]

fruits.unshift('Apple');
console.log(fruits);  // [ 'Apple', 'Pear', 'Plum' ]

// 5. Iterating over an Array
for (let fruit of fruits) {
    console.log(fruit);
}


// 6. Multidimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1]);  // 5



// 8. Array Methods
console.log(fruits.length);  // 3
console.log(fruits);  // [ 'Apple', 'Pear', 'Plum' ]

fruits.length = 2;
console.log(fruits);  // [ 'Apple', 'Pear' ]

fruits.length = 3;
console.log(fruits);  // [ 'Apple', 'Pear', <1 empty item> ]

let arr = ["Apple", "Orange", "Pear"];

console.log(arr.splice(1, 1));  // [ 'Orange' ]
console.log(arr);  // [ 'Apple', 'Pear' ]

console.log(arr.splice(1, 0, "Orange"));  // []
console.log(arr);  // [ 'Apple', 'Orange', 'Pear' ]


console.log(arr.slice(1, 2));  // [ 'Orange' ]
console.log(arr);  // [ 'Apple', 'Orange', 'Pear' ]




console.log(arr.concat("Kiwi"));  // [ 'Apple', 'Orange', 'Pear', 'Kiwi' ]
console.log(arr);  // [ 'Apple', 'Orange', 'Pear' ]

console.log(arr.concat(["Kiwi", "Banana"]));  // [ 'Apple', 'Orange', 'Pear', 'Kiwi', 'Banana' ]
console.log(arr);  // [ 'Apple', 'Orange', 'Pear' ]


console.log(arr.indexOf("Orange"));  // 1
console.log(arr.includes("Orange"));  // true

console.log(arr.reverse());  // [ 'Pear', 'Orange', 'Apple' ]
console.log(arr);  // [ 'Pear', 'Orange', 'Apple' ]

console.log(arr.join("-"));  // Pear-Orange-Apple
console.log(arr);  // [ 'Pear', 'Orange', 'Apple' ]


let organizers = 'Locus, Techaxis, JobAXL';

let individual = organizers.split(', ');

console.log(individual);  // [ 'Locus', 'Techaxis', 'JobAXL' ]
for (let name of individual) {
  console.log( `A message to ${name}.` ); // A message to Locus  (and other names)
}

//map
let numbers = [1, 2, 3, 4, 5];
let output = numbers.map((x) => x * 2);
console.log(numbers);
console.log(output);

//filter
let filtered = numbers.filter((x) => x % 2 === 0);
console.log(filtered);
console.log(numbers);

//reduce
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0
);
console.log(sum);


//switch example

let trafficLight = "green";
// let trafficLIght = prompt("What is the color of the traffic light?");

switch (trafficLight) {
  case "green":
    console.log("Drive safely");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "red":
    console.log("Stop immediately");
    break;
  default:
    console.log("Invalid traffic light color");
}


//For loop
for (let i = 0; i < 10; i++) {
  console.log("I am a Softwarefellow");
}

// // ADVANCED
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);


  // more slice

  let temp = ["hello", 1, 2, 3, 4, 5]

  console.log(temp.slice(1, 4));  

  console.log(temp.slice(-1));