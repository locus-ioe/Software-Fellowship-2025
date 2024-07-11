require("dotenv").config();
const app = require("./app");

const port = process.env.PORT || 3000;

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error("error connecting to MongoDB:", error.message);
  });

// run the server
app.listen(port, () => {
  console.log("server is listening at port", port);
});
