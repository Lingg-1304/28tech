const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Logic to fetch all products
  res.render("client/pages/products/index", { title: "Products" });
});

router.get("/create", (req, res) => {
  res.send("Create Product Page");
});

router.get("/edit", (req, res) => {
  res.send("Edit Product Page");
});

module.exports = router;
