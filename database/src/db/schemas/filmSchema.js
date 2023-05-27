const { Schema } = require('mongoose')

const filmSchema = new Schema({
  _id: String,
  title: {
    type: String,
    required: "Es necesario un nombre"
  },
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{type: String, ref: "Character"}],
  planets: [{type: String, ref: "Planet"}]
})

filmSchema.statics.list = async function(title){
  return await this.find({title: {$regex: title ? title : "", $options: "i"}})
  .populate("characters", ["_id", "name"])
  .populate("planets", ["_id", "name"])
}



filmSchema.statics.get = async function(id){
  return await this.findById(id)
  .populate("characters", ["_id", "name"])
  .populate("planets", ["_id", "name"])
}

filmSchema.statics.insert = async function(film){
  return await this.create(film)
}



module.exports = filmSchema