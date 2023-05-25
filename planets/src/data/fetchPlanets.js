const axios = require('axios')

module.exports = {
  fetchPlanets: async ()=> {
    let datos = await axios.get(`http://database:8004/Planet`)
    return datos.data
  },
  
  // fetchPlanets: async ()=> {
  //   let datos = await axios.get(`http://localhost:8004/Planet`)
  //   return datos.data
  // }
}