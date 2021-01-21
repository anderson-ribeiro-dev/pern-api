
exports.up = function(knex) {
    return knex.schema.createTable('produtos', (table) =>{
        table.increments('id').unsigned().notNullable().primary('pk_produto')
        table.integer('desconto',100).notNullable()
        table.string('descricao',255).notNullable()
        table.float('preco').notNullable()
        table.integer("deletado").defaultTo(0)
        table.datetime("criado_em").notNullable().defaultTo(knex.fn.now(6))
        table.datetime("atualizado_em")
        table.datetime("deletado_em")
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos')
};
