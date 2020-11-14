const pirateController = require("../controllers/Pirate.controller");

module.exports = (app) => {
  app.post("/api/pirate/add", pirateController.create);
  app.delete("/api/pirate/delete/:id", pirateController.delete);
  app.get('/api/pirates', pirateController.getAll);
  app.get("/api/pirate/:id", pirateController.getOne);
  app.put("/api/pirate/update/:id", pirateController.update);
}