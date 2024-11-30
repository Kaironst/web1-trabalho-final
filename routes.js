const { Router } = require("express");
const ContactController = require('./controllers/LoginController')

const routes = Router();

routes.get("/login", ContactController.index);
routes.get("/login/:id", ContactController.show);
routes.post("/login", ContactController.store);
routes.put("/login/:id", ContactController.update);
routes.delete("/login/:id", ContactController.delete);

module.exports = routes;