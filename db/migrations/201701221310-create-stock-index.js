exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('stock_indexes', function (table) {
      table.increments()
      table.string('index')
      table.decimal('value')
      table.decimal('changeNet')
      table.decimal('changeNetPercent')
      table.timestamp('createdAt')
      table.timestamp('updatedAt')
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('stock_indexes')
  ])
};
