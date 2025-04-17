const Product = require("../../models/product-model");
const User = require("../../models/user-model");

module.exports.index = (req, res) => {
  res.render("client/pages/home/index", { title: "Trang chủ" });
};

module.exports.login = (req, res) => {
  res.render("client/pages/home/login", { title: "Đăng nhập" });
};

module.exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  // check username and password
  if (User.find({ username, password })) {
    res.redirect("/");
  } else {
    res.render("client/pages/home/login", {
      title: "Đăng nhập",
      error: "Tài khoản hoặc mật khẩu không đúng",
    });
  }
};

module.exports.register = (req, res) => {
  res.render("client/pages/home/register", { title: "Đăng ký" });
};

module.exports.postRegister = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.redirect("/login");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal server error");
  }
};
