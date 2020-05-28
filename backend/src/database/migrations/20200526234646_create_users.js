
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('name').primary();
    table.string('email').notNullable();
    table.string('ramal').notNullable();
    table.string('whats').notNullable();
    table.string('senha').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
