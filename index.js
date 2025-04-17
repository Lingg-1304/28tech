require("dotenv").config();

const express = require("express");
const route = require("./routes/client/index-route.js");
const routeAdmin = require("./routes/admin/index-route.js");
const connectDB = require("./config/database.js");

const app = express();
const Port = process.env.PORT;

// Connect to MongoDB
connectDB.connect();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

route(app);
routeAdmin(app);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
