require('dotenv').config()
const app = require('./app');
const connectDB = require('./config/db');

const port = process.env.PORT || 3000

// connect to database
connectDB()

// run the server
app.listen(port, () => {
  console.log("server is listening at port", port);
});
