const Product = require("../../models/product-model");
const User = require("../../models/user-model");

module.exports.index = (req, res) => {
  res.render("client/pages/home/index", { title: "Trang chủ" });
};
