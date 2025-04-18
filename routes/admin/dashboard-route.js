const express = require("express");
const Router = express.Router();
const controllers = require("../../controllers/admin/dashboard-controller");

Router.get("/", controllers.dashboard); // Render the dashboard page

module.exports = Router;
