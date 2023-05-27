const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: "Es necesario un nombre",
  },
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: {
    type: String,
    enum: [
      "arid",
      "temperate",
      "tropical",
      "frozen",
      "murky",
      "arid",
      "windy",
      "hot",
      "artificial temperate",
      "frigid",
      "humid",
      "moist",
      "polluted",
      "unknown",
      "superheated",
      "subartic",
      "artic",
      "rocky",
    ],
  },
  gravity: String,
  terrain: {
    type: String,
    enum: [
      "desert",
      "grasslands",
      "mountains",
      "jungle",
      "rainforests",
      "tundra",
      "ice caves",
      "mountain ranges",
      "jungles",
      "gas giant",
      "forests",
      "lakes",
      "grassy hills",
      "swamps",
      "cityscape",
      "ocean",
      "rock",
      "desert",
      "barren"
    ],
  },
  surface_water: {type: String, ref: "Character"},
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
});

planetSchema.statics.list = async function (name) {
  return await this.find({name: { $regex: name ? name : "" , $options: 'i' }})
    .populate("residents", ["_id", "name"])
    .populate("surface_water", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("surface_water", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function(planet){
  return await this.create(planet)
}

module.exports = planetSchema;
