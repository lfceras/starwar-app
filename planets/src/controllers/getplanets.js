const planets = require('../data')
const { response } = require('../utils')
const {fetchPlanets} = require('../data/fetchPlanets')

module.exports = async (req, res)=>{
  const planets2 = await fetchPlanets()
  response(res, 200, planets2)
}