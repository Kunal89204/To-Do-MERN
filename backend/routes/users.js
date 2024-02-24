const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Todo')

const schema = mongoose.Schema({
  sno: String,
  title: String,
  tasks: String
})

module.exports = mongoose.model("taskslists", schema)