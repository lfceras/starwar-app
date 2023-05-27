const {Schema} = require('mongoose')

const characterSchema = new Schema({
    _id: String,
    name:{
      type: String,
      required: "Es necesario un nombre",
    },
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: {
      type: String,
      enum: ["male", "n/a", "female", "hermaphrodite", "none"]
    },
    homeworld: {type: String, ref: "Planet"},
    films: [{type: String, ref: "Film"}]
})

characterSchema.statics.list = async function(name){
  return await this.find({name: { $regex: name ? name : "" , $options: 'i' }})
  .populate("homeworld", ["_id", "name"])
  .populate("films", ["_id", "title"])
}

characterSchema.statics.get = async function(id){
  return await this.findById(id)
  .populate("homeworld", ["_id", "name"])
  .populate("films", ["_id", "title"])
}

characterSchema.statics.insert = async function(character){
  return await this.create(character)
}

module.exports = characterSchema