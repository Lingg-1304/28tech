const express = require("express");
const Router = express.Router();
const controllers = require("../../controllers/admin/products-controller");

// ---> /admin/products/....

Router.get("/", controllers.index);

Router.post("/change-status/:status/:id", controllers.changeStatus);

Router.get("/create", controllers.createGet);
Router.post("/create", controllers.createPost);

Router.get("/edit/:id", controllers.editGet);
Router.post("/edit/:id", controllers.editPost);

Router.delete("/delete/:id", controllers.deleteProduct);

module.exports = Router;
