require('dotenv').config()
const app = require('./app')

const port = process.env.PORT || 3000
const DB = process.env.MONGO_URL

console.log(port)

// connect mongoose to mongodb
mongoose.connect(DB, {
}).then(() => console.log("database connection successful"))

// run the server
app.listen(port, () => {
    console.log("server is listening at port ", port)
})