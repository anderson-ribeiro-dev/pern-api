module.exports = {
  client: "pg",
  connection: {
    host: process.env.DBHOST,
    port: process.env.PORTDB,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE,
  },
  // connection: {
  //   host : 'localhost',
  //   port : 5432,
  //   user: 'postgres',
  //   password: '123456',
  //   database: 'autenticacao'
  // },
  pool: {
    min: 0,
    max: 15,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
