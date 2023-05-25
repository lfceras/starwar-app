const planets = require('./planets.json')
const {fetchPlanets} = require('./fetchPlanets')

module.exports = {
  getPlanets: async ()=> planets,
  fetchPlanets: async ()=> fetchPlanets
}