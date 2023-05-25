const axios = require('axios')

module.exports ={
  fetchData: async ()=>{
    let datos = await axios.get(`http://database:8004/Character/`)
    return datos.data
  }

  // fetchData: async ()=>{
  //   let datos = await axios.get(`http://localhost:8004/Character/`)
  //   return datos.data
  // }
}
