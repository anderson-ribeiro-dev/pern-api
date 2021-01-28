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

// const cnn = {
//   client: "pg",
//   ssl: true,
//   sslmode: "require",
//   connection: {
//     host: "produtos.cd33u3w7gwiu.us-east-1.rds.amazonaws.com",
//     port: 5432,
//     user: "postgres",
//     password: "derso_1804****",
//     database: "postgres",
//     ssl: true,
//   },
//   debug: false,
//   pool: { min: 0, max: 15 },
//   migrations: {
//     tableName: "knex_migrations",
//   },
// };
// module.exports = {
//   development: cnn,
//   staging: cnn,
//   production: cnn,
// };
