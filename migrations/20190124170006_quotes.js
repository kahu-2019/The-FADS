
exports.up = function (knex, Promise) {
  return knex.schema.createTable('quotes', (t) => {
    t.increments('id')
    t.string('quotes')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('quotes')
};
