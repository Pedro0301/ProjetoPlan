
exports.up = function(knex) {
    return knex.schema.createTable('clients', function (table) {
        table.string('empresa').primary();
        table.string('comprador').notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable();
        table.string('whats').notNullable();
        table.string('cnpj').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clients');
};
