require("dotenv").config();
const app = require("./app");

const port = process.env.PORT || 3000;

console.log(port);

// run the server
app.listen(port, () => {
  console.log("server is listening at port ", port);
});
