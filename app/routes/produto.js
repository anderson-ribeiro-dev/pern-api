const produtoController = require("../controllers/produtoController");

module.exports = (app) => {
  app.get("/produto/:limite/:offset", produtoController.index);
  app.get("/produto/:id", produtoController.byId);
  app.post("/produto", produtoController.create);
  app.put("/produto/:id", produtoController.edit);
  app.delete("/produto/:id", produtoController.delete);
};
