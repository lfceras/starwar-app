const { response } = require('../utils')
const axios = require('axios')

// module.exports = async (req, res)=>{
//     let datos = await axios.get(`http://localhost:8004/Planet`)
//   response(res, 200, datos.data)
// }

module.exports = async (req, res)=>{
    let datos = await axios.get(`http://database:8004/Planet`)
  response(res, 200, datos.data)
}