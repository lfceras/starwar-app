const { response } = require('../utils')
const axios = require('axios')
const { ClientError } = require('../utils/errors')

// module.exports = async (req, res)=>{
//     const { name } = req.query
//     let datos = await axios.get(`http://localhost:8004/Planet?${name}`)
//     if(datos.length === 0) throw new ClientError('Not Found', 404)
//   response(res, 200, datos.data)
// }

module.exports = async (req, res)=>{
    const { name } = req.query
    let datos = await axios.get(`http://database:8004/Planet?${name}`)
    if(datos.length === 0) throw new ClientError('Not Found', 404)
  response(res, 200, datos.data)
}