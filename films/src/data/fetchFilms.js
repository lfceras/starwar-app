const axios = require('axios')

module.exports = {
  fetchFilms: async ()=>{
    let films = await axios.get(`http://database:8004/Film`)
    return films.data
  }
  // fetchFilms: async ()=>{
  //   let films = await axios.get(`http://localhost:8004/Film`)
  //   return films.data
  // }
}