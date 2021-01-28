const usuarioModel = require("../models/usuarioModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secretKey = process.env.APP_SECRET;
class AuthController {
  async authentication(req, res) {
    const { email, password } = req.body;
    if (email !== undefined) {
      const usuario = await usuarioModel.usuario(email);
      console.log("usuario", usuario);
      if (usuario.length > 0) {
        //verifica se as senhas são iguais, retorna true ou false
        const checkPassword = bcrypt.compare(password, usuario[0].password);
        if ((await checkPassword) && usuario[0].email === email) {
          jwt.sign(
            {
              nome: usuario[0].name,
              id: usuario[0].id,
              email: usuario[0].email,
            },
            secretKey,
            { expiresIn: "8h" },
            (err, token) => {
              if (err) {
                res.status(400);
                res.json({ error: "Falha interna" });
              } else {
                res.status(200);
                res.json({
                  user: {
                    id: usuario[0].id,
                    name: usuario[0].name,
                    email: usuario[0].email,
                  },

                  token: token,
                });
              }
            }
          );
        } else {
          res.status(401);
          res.json({ error: "Credênciais inválidas !!" });
        }
      } else {
        res.status(404);
        res.json({ error: "O e-mail não existe na base de dados !!" });
      }
    } else {
      res.status(400);
      res.json({ error: "O e-mail é invalido!!" });
    }
  }
}

module.exports = new AuthController();
