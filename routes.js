const { Router } = require("express");
const LoginController = require('./controllers/LoginController')

const routes = Router();

routes.get("/login", LoginController.index);
routes.get("/login/:id", LoginController.show);
routes.post("/login", LoginController.store);
routes.put("/login/:id", LoginController.update);
routes.delete("/login/:id", LoginController.delete);

module.exports = routes;