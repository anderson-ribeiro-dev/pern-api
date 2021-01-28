module.exports = {
  client: "pg",
  ssl: true,
  connection: {
    host: "produtos.cd33u3w7gwiu.us-east-1.rds.amazonaws.com",
    port: 5432,
    user: "postgres",
    password: "derso_1804****",
    database: "postgres",
    ssl: true,
  },
  // connection: {
  //   host: "localhost",
  //   port: "5432",
  //   user: "postgres",
  //   password: "123456",
  //   database: "autenticacao",
  // },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
