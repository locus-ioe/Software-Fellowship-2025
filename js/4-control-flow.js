// if else

let yourScore = 95;

if (yourScore >= 90) {
  console.log("Your grade is A");
} else if (yourScore >= 80) {
  console.log("Your grade is B");
} else if (yourScore >= 70) {
  console.log("Your grade is C");
} else if (yourScore >= 60) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is F");
}

//Ternary operator

let scholarShip = yourScore >= 90 ? "Yes" : "No";

console.log(scholarShip);

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

//For of loops

let colors = ["red", "blue", "green"];

for (let color of colors) {
  console.log(color);
}

//for in loops

let people = ["John", "Harl", "Ram"];

for (let id in people) {
  console.log(people[id]);
}

//while loops

let count = 0;

while (count < 10) {
  console.log(count);
  count++;
}

//do while loops

let start = 10;

do {
  console.log(start);
  start++;
} while (start <= 10);

//break and continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
