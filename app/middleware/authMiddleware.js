const jwt = require("jsonwebtoken");
const secretKey = process.env.APP_SECRET;

const auth = (req, res, next, noAuthorization) => {
  //Verfica se a url atual esta dentro do array de rotas que nao precisa de autorização
  if (noAuthorization.includes(req.url)) {
    return next();
  }

  const authToken = req.headers["authorization"];

  if (authToken !== undefined) {
    const bearer = authToken.split(" ");
    let token = bearer[1];

    jwt.verify(token, secretKey, (err, data) => {
      if (err) {
        res.status(401);
        res.json({ error: "Token Inválido" });
      } else {
        req.token = token;
        req.loggedUser = { nome: data.nome, id: data.id, email: data.email };
        next();
      }
    });
  } else {
    res.status(401);
    res.json({ error: "Token Inválido" });
  }
};

module.exports = {
  auth,
};
