
exports.up = function(knex) {
    return knex.schema.createTable('usuario', (table) =>{
        table.increments('id').unsigned().notNullable().primary('pk_usuario')
        table.string('name',100).notNullable()
        table.string('email', 100).unique().comment('Este campo deve ser único!')
        table.string('password',200).notNullable()
        table.integer('role').notNullable()
        table.integer("deletado")
        table.datetime("criado_em").notNullable().defaultTo(knex.fn.now(6))
        table.datetime("atualizado_em")
        table.datetime("deletado_em")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario')
};
