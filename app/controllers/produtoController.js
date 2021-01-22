const produtoModel = require("../models/produtoModel");

class ProdutoController {
  async index(req, res) {
    const result = await produtoModel.listarProduto({ ...req.params });
    if (result) {
      res.status(200);
      res.json(result);
    } else {
      res.status(400);
      res.json(result);
    }
  }

  async byId(req, res) {
    const result = await produtoModel.byIdProduto({ ...req.params });
    if (result) {
      res.status(200);
      res.json(result);
    } else {
      res.status(400);
      res.json(result);
    }
  }

  async create(req, res) {
    const data = req.body;
    const result = await produtoModel.cadastrarProduto(data);
    if (result) {
      res.status(200);
      res.json(result);
    } else {
      res.status(400);
      res.json(result);
    }
  }
  async edit(req, res) {
    const data = req.body;

    const result = await produtoModel.editProduto({ ...req.params, data });
    if (result) {
      res.status(200);
      res.json(result);
    } else {
      res.status(400);
      res.json(result);
    }
  }

  async delete(req, res) {
    const result = await produtoModel.delProduto({ ...req.params });
    if (result) {
      res.status(200);
      res.json(result);
    } else {
      res.status(400);
      res.json(result);
    }
  }
}

module.exports = new ProdutoController();
