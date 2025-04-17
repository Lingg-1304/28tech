const Product = require("../../models/product-model");

module.exports.getProducts = async (req, res) => {
  const products = await Product.find({
    deleted: false,
    status: "active",
  });

  const newProducts = products.map((product) => {
    product.priceNew = (
      (product.price * (100 - product.discountPercentage)) /
      100
    ).toFixed(0);
    return product;
  });

  console.log(newProducts);

  res.render("client/pages/products/index", {
    title: "Products",
    products: newProducts,
  });
};
