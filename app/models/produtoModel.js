const conn = require("../database/dbConfig");

class ProdutoModel {
  async listarProduto({ limite, offset }) {
    let model = conn("produtos").where("deletado", 0);
    let data = await model
      .clone()
      .offset(offset)
      .limit(parseInt(limite))
      .select("*")
      .orderBy("id", "desc");

    let totalCount = await model.clone().count();

    return {
      totalCount: totalCount[0]["count"],
      data: data,
    };
  }

  async byIdProduto({ id }) {
    return await conn("produtos")
      .select("*")
      .where("id", id)
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  async editProduto({ id, data }) {
    return await conn("produtos")
      .where("id", id)
      .update({ ...data, atualizado_em: new Date() })
      .returning("*")
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  async cadastrarProduto(data) {
    return await conn("produtos")
      .insert(data)
      .returning("*")
      .then((res) => res)
      .catch((err) => err);
  }

  async delProduto({ id }) {
    return await conn("produtos")
      .where("id", id)
      .update({ deletado: 1, deletado_em: new Date() })
      .returning("*")
      .then((res) => res)
      .catch((err) => console.error(err));
  }
}

module.exports = new ProdutoModel();
