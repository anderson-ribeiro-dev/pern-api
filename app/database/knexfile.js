module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
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
      max: 20,
    },
    migrations: {
      directory: "migrations",
      tableName: "knex_migrations",
    },
  },
};
