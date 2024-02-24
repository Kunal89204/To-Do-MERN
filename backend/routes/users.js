const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const schema = mongoose.Schema({
  sno: String,
  title: String,
  tasks: String
})

module.exports = mongoose.model("taskslists", schema)