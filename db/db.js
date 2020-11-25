const Sequelize = require('sequelize')

const db = Sequelize('postgres://localhost:5432/sat-exp-seq')

const Student = db.define('student', {

})

module.exports = db
