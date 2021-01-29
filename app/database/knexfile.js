module.exports = {
  development: {
    client: "pg",
    connection: {
      host: 'produtos.cd33u3w7gwiu.us-east-1.rds.amazonaws.co'm,
      port: '5432',
      user: 'postgres',
      password: 'derso_1804****',
      database: 'postgres',
      connectTimeout: 90000,

    },
    // connection: {
    //   host: "localhost",
    //   port: "5432",
    //   user: "postgres",
    //   password: "123456",
    //   database: "autenticacao",
    // },
    debub: true,
    pool: {
      min: 1,
      max: 50,
    },
    migrations: {
      directory: "migrations",
      tableName: "knex_migrations",
    },
  },
};
