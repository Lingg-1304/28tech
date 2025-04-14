const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.render("client/pages/home/index", { title: "Product Management" });
});

module.exports = Router;
