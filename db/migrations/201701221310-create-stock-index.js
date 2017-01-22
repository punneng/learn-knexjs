exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('stock_indexes', function (table) {
      table.increments().primary()
      table.string('index').notNull()
      table.decimal('value').notNull()
      table.decimal('changeNet').notNull()
      table.decimal('changeNetPercent').notNull()
      table.timestamp('createdAt').defaultTo(knex.fn.now())
      table.timestamp('updatedAt').nullable()
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('stock_indexes')
  ])
};
