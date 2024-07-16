//functions

function product(a, b) {
  return a * b;
}

let result = product(5, 3);
console.log(result);

//anonymous functions

let multiply = (a, b) => {
  return a * b;
};

let result2 = multiply(5, 3);

//asynchronous javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched";
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

fetchData(displayData);

//Promises
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});

myPromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("Done"));

//async await
async function displayDataAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

displayDataAsync();
