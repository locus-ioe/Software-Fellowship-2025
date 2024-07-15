//Objects
let sponsors = {
  name: "Techaxis",
  location: "Kumaripati",
};

console.log(sponsors.name);
console.log(sponsors["location"]);

//Updating Objects
sponsors.isAmazing = true;
console.log(sponsors.isAmazing);

console.log(sponsors);

delete sponsors.location;
console.log(sponsors);

//Using Objects
function makeUser(name, age) {
  return { name: name, age: age };
}

let user = makeUser("John Doe", 30);
console.log(user);

//Property Existence Test using "in" operator
console.log("name" in user); // true
console.log("email" in user); // false

//Iterating over properties of objects
let softwarefellow = { name: "softwarefellow", age: 28, "likes to code": true };

for (let key in softwarefellow) {
  console.log(key, softwarefellow[key]); // name softwarefellow, age 28, likes to code true
}

//this in methods
let sponsor = { name: "Software", age: 28 };

sponsor.sayHi = function () {
  console.log("Hello, my name is" + this.name);
};

sponsor.sayHi(); // Hello, my name is Software

//why is this used
let sponsor2 = { name: "JobAXL", age: 30 };

sponsor2.sayHello = function () {
  console.log("Hello I am, " + sponsor2.name);
};

sponsor2.sayHello(); // Hello I am, JobAXL

let organization = sponsor2;
sponsor2 = null;

organization.sayHello();
