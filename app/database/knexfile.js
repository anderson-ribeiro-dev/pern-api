
module.exports = {
    client: 'pg',
    // connection: {
    //   host : process.env.HOST,
    //   port : process.env.PORT,      
    //   user: process.env.USER,
    //   password: process.env.PASSWORD,
    //   database: process.env.DATABASE
    // },
    connection: {
      host : 'localhost',
      port : 5432,      
      user: 'postgres',
      password: '123456',
      database: 'autenticacao'
    },
    pool: {
      min: 0,
      max: 15
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};