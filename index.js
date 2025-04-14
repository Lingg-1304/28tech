const express = require("express");

const route = require("./routes/client/index-route.js");

const app = express();
const Port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", "./views");

route(app);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
