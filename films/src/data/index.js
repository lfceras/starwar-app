const films = require('./films.json')
const fetchFilms = require('./fetchFilms')

module.exports = {
  getFilms:async () => films,
  fetchFilms: async ()=> fetchFilms
}