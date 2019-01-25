
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  randomQ
}

function randomQ(randomQ, db = connection) {
  return db('quotes')
    .select('quotes')
    .orderByRaw(RAND())
    .limit(1)
}