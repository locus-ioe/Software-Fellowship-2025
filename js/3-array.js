//Creating array
let fruit = ["Apple", "Orange", "Plum"];
console.log(fruit); // ['Apple', 'Orange', 'Plum']
console.log(fruit[0]);

//Push and Pop
fruit.push("Mango");
console.log(fruit); // ['Apple', 'Orange', 'Plum', 'Mango']
let last = fruit.pop();
console.log(fruit); // ['Apple', 'Orange', 'Plum']
console.log(last);

//splice
let arr = ["Apple", "Orange", "Pear"];

console.log(arr.splice(1, 1));
console.log(arr);

console.log(arr.splice(1, 0, "Orange"));
console.log(arr);

//slice
console.log(arr.slice(1, 2));
console.log(arr);

console.log(arr.slice(-2));

//concat
console.log(arr.concat("Kiwi"));
console.log(arr);

console.log(arr.concat(["Kiwi", "Banana"]));
console.log(arr);

//indexOf and includes
console.log(arr.indexOf("Orange"));
console.log(arr.includes("Orange"));

//reverse
console.log(arr.reverse());
console.log(arr);

//join
console.log(arr.join(", "));

//split
console.log("Apple,Orange,Pear".split(", "));

//map
let numbers = [1, 2, 3, 4, 5];
let output = numbers.map((x) => x * 2);
console.log(numbers);
console.log(output);

//filter
let filtered = numbers.filter((x) => x % 2 === 0);
console.log(filtered);
console.log(arr);

//reduce
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);
