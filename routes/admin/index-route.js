const dashboardRoute = require("./dashboard-route");
const productsRoute = require("./products-route");
const systemConfig = require("../../config/system");

module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;

  app.use(PATH_ADMIN + "/dashboard", dashboardRoute); // Admin dashboard route
  app.use(PATH_ADMIN + "/products", productsRoute);
};
