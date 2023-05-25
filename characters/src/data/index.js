const characters = require('./characters.json')
const {fetchData} = require('./fecthData')

module.exports = {
  test: async ()=>{
    return characters
  },
  create: async ()=>{
    throw new Error('Fallo algo acá')
  },
  fetchData: async ()=> fetchData
}